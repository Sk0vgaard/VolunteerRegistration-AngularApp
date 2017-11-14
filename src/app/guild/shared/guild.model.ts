import {GuildWork} from '../../guild-work/shared/guildWork.model';

export class Guild {
  id?: number;
  name: string;
  guildWorks?: GuildWork[];
}
