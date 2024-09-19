import Dev from "./Dev";
import Facebook from "./Facebook";
import GitHub from "./GitHub";
import Instagram from "./Instagram";
import LinkedIn from "./LinkedIn";
import Mail from "./Mail";
import Mastodon from "./Mastodon";
import Threads from "./Threads";
import Twitter from "./Twitter";
import X from "./X";
import YouTube from "./YouTube";

export type SimpleIconsType =
  | typeof Dev
  | typeof Facebook
  | typeof GitHub
  | typeof Instagram
  | typeof LinkedIn
  | typeof Mail
  | typeof Mastodon
  | typeof Threads
  | typeof Twitter
  | typeof X
  | typeof YouTube;

const SimpleIcons = {
  Dev,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Mail,
  Mastodon,
  Threads,
  Twitter,
  X,
  YouTube,
};

export default SimpleIcons;
