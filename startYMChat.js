import {YMChat, YMChatEvents} from 'ymchat-react-native';

const openYellowSDK = slugName => {
  YMChat.setBotId('...');
  YMChat.setCustomURL('https://r2.cloud.yellow.ai');
  YMChat.setVersion(2);
  YMChat.setDisableActionsOnLoad(true);

  const userId = '...';
  YMChat.setAuthenticationToken(userId);

  const payload = {
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

  YMChat.setPayload(payload);

  const messageListener = eventData => {
    console.log('event: ', eventData);
    /** Check incoming eventData
     * as flag when zendesk webview timeout triggered */
    if (eventData?.code === 'reload-chatbot-widget') {
      YMChat.closeBot();
      openYellowSDK();
    }
  };

  setTimeout(() => {
    YMChatEvents.addListener('YMChatEvent', messageListener);
    setTimeout(() => {
      YMChat.startChatbot();
    });
  });
};

export default openYellowSDK;
