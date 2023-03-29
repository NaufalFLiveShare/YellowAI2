import {NativeModules} from 'react-native';
import {YMChat, YMChatEvents} from 'ymchat-react-native';
const {OtherScreen} = NativeModules;

let addedListener = false;
const openYellowSDK = slugName => {
  YMChat.setBotId('...');
  YMChat.setCustomURL('https://r2.cloud.yellow.ai');
  YMChat.setVersion(2);
  YMChat.setDisableActionsOnLoad(true);

  const userId = '...';
  YMChat.setAuthenticationToken(userId);

  let payload = {
    name: 'Integration',
    type: 'react-native',
    flip_jwt_token: '...',
    zendesk_jwt_token: '...',
    user_id_flip: userId,
  };

  console.log('slugName:', slugName);
  if (slugName) {
    payload.JourneySlug = slugName;
  }

  console.log('PAYLOAD: ', payload);

  YMChat.setPayload(payload);

  const messageListener = eventData => {
    console.log('event: ', eventData);
    if (eventData.code === 'direct-to-other-page') {
      OtherScreen.showOtherViewController();
    }
    /** Check incoming eventData
     * as flag when zendesk webview timeout triggered */
    if (eventData?.code === 'reload-chatbot-widget') {
      YMChat.reloadBot();
    }
  };

  setTimeout(() => {
    if (!addedListener) {
      YMChatEvents.addListener('YMChatEvent', messageListener);
      addedListener = true;
    }
    // just invoke next tick
    setTimeout(() => {
      YMChat.startChatbot();
    });
  });
};

export default openYellowSDK;
