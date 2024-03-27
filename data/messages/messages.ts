import type { AppMessage } from '@types';

import type { DomainMessageCodes } from './domain';
import { domainMessages } from './domain';

export type MessageKey = DomainMessageCodes;

const messages: Record<MessageKey, AppMessage> = {
  ...domainMessages,
};

export default messages;
