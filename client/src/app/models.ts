export interface TrackInfo {
  readonly id?: number;
  readonly url: string;
  readonly title: string;
  readonly artist: string;
  readonly thumbnailUrl: string;
  readonly duration: number;
}

export interface QueueInfo {
  currentTrack: TrackInfo;
  tracks: TrackInfo[];
  previousTracks: TrackInfo[];
}

export interface JoinGuild {
  guildId: string;
  oldGuildId?: string;
  userId?: string;
}
