import 'react-native-get-random-values';
import AsyncStorage from '@react-native-community/async-storage';
import {v4 as uuidv4} from 'uuid';
// eslint-disable-next-line
import {YMChat, YMChatEvents} from 'ymchat-react-native';

const YMAUTH_GUEST = 'ym-auth-guest';

/**
 * generate unique id for guest user and save it to storage
 * so later they still got their history saved after logged out
 * @returns string
 */
const getUniqueId = async () => {
  const id = await AsyncStorage.getItem(YMAUTH_GUEST);

  if (id) {
    console.log('USING LATEST ID', id);
    return id;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const newId = uuidv4();
  console.log('USING NEW ID', newId);
  await AsyncStorage.setItem(YMAUTH_GUEST, newId);

  return newId;
};

const handleArticleCarouselClick = eventData => {
  console.log(eventData);
};

const handleCloseEvent = () => {
  console.log('close event');
};

let isAddedEventListener = false;
const startChatViaYellowSDK = async (slugName = undefined) => {
  const token = '';
  let flipToken = '';
  // remove Bearer prefix
  flipToken = flipToken.replace('Bearer ', '');
  const flipUserId = '0';
  const guestId = await getUniqueId();
  // default value of flipUserId is '0' when user is guest
  const ymAuthToken = flipUserId !== '0' ? flipUserId : guestId;

  const timeout = '18000';

  const botId = 'x1670310721721';

  YMChat.setBotId(botId);
  YMChat.setCustomURL('https://r2.cloud.yellow.ai');
  YMChat.setVersion(2);
  YMChat.setDisableActionsOnLoad(true);

  YMChat.setAuthenticationToken(ymAuthToken);
  YMChat.setStatusBarColor('#FD6542');

  const payload = {
    name: 'Integration',
    type: 'react-native',
    flip_jwt_token: flipToken,
    zendesk_jwt_token: token,
    user_id_flip: flipUserId,
    timeout, // in milisecond,
  };

  if (slugName) {
    payload.JourneySlug = slugName;
  }

  YMChat.setPayload(payload);

  const messageListener = eventData => {
    if (eventData.code === 'cta-clicked') {
      handleArticleCarouselClick(eventData);
    }
    /** Check incoming eventData
     * as flag when zendesk webview timeout triggered */
    if (eventData?.code === 'reload-chatbot-widget') {
      YMChat.reloadBot();
    }
  };

  setTimeout(() => {
    if (!isAddedEventListener) {
      YMChatEvents.addListener('YMChatEvent', messageListener);
      YMChatEvents.addListener('YMBotCloseEvent', handleCloseEvent);
      isAddedEventListener = true;
    }
    YMChat.startChatbot();
  }, 1000);
};

export const startNewSessionChatViaYellowSDK = () => {
  const WITH_NEW_SESSION = 'reroute-closing-webview-by-event_ljonbu';
  return startChatViaYellowSDK(WITH_NEW_SESSION);
};

export default startChatViaYellowSDK;
