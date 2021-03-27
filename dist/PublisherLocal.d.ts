import PublisherBase, { PublisherOptions } from '@electron-forge/publisher-base';
import { PublisherLocalConfig } from './Config';
export default class PublisherLocal extends PublisherBase<PublisherLocalConfig> {
    name: string;
    publish({ makeResults }: PublisherOptions): Promise<void>;
}
