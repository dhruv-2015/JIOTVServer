import { VmAudio, VmFile, VmCaptionControl, VmControl, VmIcon, VmTooltip, VmCaptions, VmClickToPlay, VmControlGroup, VmControlSpacer, VmControls, VmCurrentTime, VmTime, VmDailymotion, VmEmbed, VmDash, VmVideo, VmDblClickFullscreen, VmDefaultControls, VmEndTime, VmFullscreenControl, VmLiveIndicator, VmMuteControl, VmPipControl, VmPlaybackControl, VmScrim, VmScrubberControl, VmSlider, VmSettingsControl, VmTimeProgress, VmVolumeControl, VmDefaultSettings, VmMenu, VmMenuItem, VmMenuRadio, VmMenuRadioGroup, VmSettings, VmSubmenu, VmDefaultUi, VmLoadingScreen, VmPoster, VmSpinner, VmUi, VmHls, VmIconLibrary, VmPlayer, VmSkeleton, VmVimeo, VmYoutube } from '@vime/core';
import { c as create_ssr_component, f as createEventDispatcher, b as add_attribute } from './index2-b63c4e3b.js';

const define$1 = (tagName, clazz) => {
  const isClient = typeof window !== "undefined";
  if (isClient && !customElements.get(tagName))
    customElements.define(tagName, clazz);
};
define$1("vm-audio", VmAudio);
define$1("vm-file", VmFile);
define$1("vm-caption-control", VmCaptionControl);
define$1("vm-control", VmControl);
define$1("vm-icon", VmIcon);
define$1("vm-tooltip", VmTooltip);
define$1("vm-captions", VmCaptions);
define$1("vm-click-to-play", VmClickToPlay);
define$1("vm-control", VmControl);
define$1("vm-control-group", VmControlGroup);
define$1("vm-control-spacer", VmControlSpacer);
define$1("vm-controls", VmControls);
define$1("vm-current-time", VmCurrentTime);
define$1("vm-time", VmTime);
define$1("vm-dailymotion", VmDailymotion);
define$1("vm-embed", VmEmbed);
define$1("vm-dash", VmDash);
define$1("vm-file", VmFile);
define$1("vm-video", VmVideo);
define$1("vm-dbl-click-fullscreen", VmDblClickFullscreen);
define$1("vm-default-controls", VmDefaultControls);
define$1("vm-caption-control", VmCaptionControl);
define$1("vm-control", VmControl);
define$1("vm-icon", VmIcon);
define$1("vm-tooltip", VmTooltip);
define$1("vm-control-group", VmControlGroup);
define$1("vm-control-spacer", VmControlSpacer);
define$1("vm-controls", VmControls);
define$1("vm-current-time", VmCurrentTime);
define$1("vm-time", VmTime);
define$1("vm-end-time", VmEndTime);
define$1("vm-fullscreen-control", VmFullscreenControl);
define$1("vm-live-indicator", VmLiveIndicator);
define$1("vm-mute-control", VmMuteControl);
define$1("vm-pip-control", VmPipControl);
define$1("vm-playback-control", VmPlaybackControl);
define$1("vm-scrim", VmScrim);
define$1("vm-scrubber-control", VmScrubberControl);
define$1("vm-slider", VmSlider);
define$1("vm-settings-control", VmSettingsControl);
define$1("vm-time-progress", VmTimeProgress);
define$1("vm-volume-control", VmVolumeControl);
define$1("vm-default-settings", VmDefaultSettings);
define$1("vm-icon", VmIcon);
define$1("vm-menu", VmMenu);
define$1("vm-menu-item", VmMenuItem);
define$1("vm-menu-radio", VmMenuRadio);
define$1("vm-menu-radio-group", VmMenuRadioGroup);
define$1("vm-settings", VmSettings);
define$1("vm-submenu", VmSubmenu);
define$1("vm-default-ui", VmDefaultUi);
define$1("vm-caption-control", VmCaptionControl);
define$1("vm-control", VmControl);
define$1("vm-icon", VmIcon);
define$1("vm-tooltip", VmTooltip);
define$1("vm-captions", VmCaptions);
define$1("vm-click-to-play", VmClickToPlay);
define$1("vm-control-group", VmControlGroup);
define$1("vm-control-spacer", VmControlSpacer);
define$1("vm-controls", VmControls);
define$1("vm-current-time", VmCurrentTime);
define$1("vm-time", VmTime);
define$1("vm-dbl-click-fullscreen", VmDblClickFullscreen);
define$1("vm-default-controls", VmDefaultControls);
define$1("vm-end-time", VmEndTime);
define$1("vm-fullscreen-control", VmFullscreenControl);
define$1("vm-live-indicator", VmLiveIndicator);
define$1("vm-mute-control", VmMuteControl);
define$1("vm-pip-control", VmPipControl);
define$1("vm-playback-control", VmPlaybackControl);
define$1("vm-scrim", VmScrim);
define$1("vm-scrubber-control", VmScrubberControl);
define$1("vm-slider", VmSlider);
define$1("vm-settings-control", VmSettingsControl);
define$1("vm-time-progress", VmTimeProgress);
define$1("vm-volume-control", VmVolumeControl);
define$1("vm-default-settings", VmDefaultSettings);
define$1("vm-menu", VmMenu);
define$1("vm-menu-item", VmMenuItem);
define$1("vm-menu-radio", VmMenuRadio);
define$1("vm-menu-radio-group", VmMenuRadioGroup);
define$1("vm-settings", VmSettings);
define$1("vm-submenu", VmSubmenu);
define$1("vm-loading-screen", VmLoadingScreen);
define$1("vm-poster", VmPoster);
define$1("vm-spinner", VmSpinner);
define$1("vm-ui", VmUi);
const DefaultUi$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let __ref;
  createEventDispatcher();
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { noClickToPlay = false } = $$props;
  let { noDblClickFullscreen = false } = $$props;
  let { noCaptions = false } = $$props;
  let { noPoster = false } = $$props;
  let { noSpinner = false } = $$props;
  let { noControls = false } = $$props;
  let { noSettings = false } = $$props;
  let { noLoadingScreen = false } = $$props;
  const ref = () => __ref;
  const getWebComponent = () => __ref;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.noClickToPlay === void 0 && $$bindings.noClickToPlay && noClickToPlay !== void 0)
    $$bindings.noClickToPlay(noClickToPlay);
  if ($$props.noDblClickFullscreen === void 0 && $$bindings.noDblClickFullscreen && noDblClickFullscreen !== void 0)
    $$bindings.noDblClickFullscreen(noDblClickFullscreen);
  if ($$props.noCaptions === void 0 && $$bindings.noCaptions && noCaptions !== void 0)
    $$bindings.noCaptions(noCaptions);
  if ($$props.noPoster === void 0 && $$bindings.noPoster && noPoster !== void 0)
    $$bindings.noPoster(noPoster);
  if ($$props.noSpinner === void 0 && $$bindings.noSpinner && noSpinner !== void 0)
    $$bindings.noSpinner(noSpinner);
  if ($$props.noControls === void 0 && $$bindings.noControls && noControls !== void 0)
    $$bindings.noControls(noControls);
  if ($$props.noSettings === void 0 && $$bindings.noSettings && noSettings !== void 0)
    $$bindings.noSettings(noSettings);
  if ($$props.noLoadingScreen === void 0 && $$bindings.noLoadingScreen && noLoadingScreen !== void 0)
    $$bindings.noLoadingScreen(noLoadingScreen);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.getWebComponent === void 0 && $$bindings.getWebComponent && getWebComponent !== void 0)
    $$bindings.getWebComponent(getWebComponent);
  return `<vm-default-ui${add_attribute("class", className, 0)}${add_attribute("style", style, 0)}${add_attribute("no-click-to-play", noClickToPlay, 0)}${add_attribute("no-dbl-click-fullscreen", noDblClickFullscreen, 0)}${add_attribute("no-captions", noCaptions, 0)}${add_attribute("no-poster", noPoster, 0)}${add_attribute("no-spinner", noSpinner, 0)}${add_attribute("no-controls", noControls, 0)}${add_attribute("no-settings", noSettings, 0)}${add_attribute("no-loading-screen", noLoadingScreen, 0)}${add_attribute("this", __ref, 0)}>${slots.default ? slots.default({}) : ``}</vm-default-ui>`;
});
define$1("vm-embed", VmEmbed);
define$1("vm-end-time", VmEndTime);
define$1("vm-time", VmTime);
define$1("vm-file", VmFile);
define$1("vm-fullscreen-control", VmFullscreenControl);
define$1("vm-control", VmControl);
define$1("vm-icon", VmIcon);
define$1("vm-tooltip", VmTooltip);
define$1("vm-hls", VmHls);
define$1("vm-file", VmFile);
define$1("vm-video", VmVideo);
const Hls$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let __ref;
  createEventDispatcher();
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { version = "latest" } = $$props;
  let { libSrc = void 0 } = $$props;
  let { config = void 0 } = $$props;
  let { crossOrigin = void 0 } = $$props;
  let { preload = "metadata" } = $$props;
  let { poster = void 0 } = $$props;
  let { controlsList = void 0 } = $$props;
  let { autoPiP = void 0 } = $$props;
  let { disablePiP = void 0 } = $$props;
  let { disableRemotePlayback = void 0 } = $$props;
  let { playbackReady = false } = $$props;
  let { mediaTitle = void 0 } = $$props;
  const getAdapter = (...args) => __ref.getAdapter(...args);
  const ref = () => __ref;
  const getWebComponent = () => __ref;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.version === void 0 && $$bindings.version && version !== void 0)
    $$bindings.version(version);
  if ($$props.libSrc === void 0 && $$bindings.libSrc && libSrc !== void 0)
    $$bindings.libSrc(libSrc);
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  if ($$props.crossOrigin === void 0 && $$bindings.crossOrigin && crossOrigin !== void 0)
    $$bindings.crossOrigin(crossOrigin);
  if ($$props.preload === void 0 && $$bindings.preload && preload !== void 0)
    $$bindings.preload(preload);
  if ($$props.poster === void 0 && $$bindings.poster && poster !== void 0)
    $$bindings.poster(poster);
  if ($$props.controlsList === void 0 && $$bindings.controlsList && controlsList !== void 0)
    $$bindings.controlsList(controlsList);
  if ($$props.autoPiP === void 0 && $$bindings.autoPiP && autoPiP !== void 0)
    $$bindings.autoPiP(autoPiP);
  if ($$props.disablePiP === void 0 && $$bindings.disablePiP && disablePiP !== void 0)
    $$bindings.disablePiP(disablePiP);
  if ($$props.disableRemotePlayback === void 0 && $$bindings.disableRemotePlayback && disableRemotePlayback !== void 0)
    $$bindings.disableRemotePlayback(disableRemotePlayback);
  if ($$props.playbackReady === void 0 && $$bindings.playbackReady && playbackReady !== void 0)
    $$bindings.playbackReady(playbackReady);
  if ($$props.mediaTitle === void 0 && $$bindings.mediaTitle && mediaTitle !== void 0)
    $$bindings.mediaTitle(mediaTitle);
  if ($$props.getAdapter === void 0 && $$bindings.getAdapter && getAdapter !== void 0)
    $$bindings.getAdapter(getAdapter);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.getWebComponent === void 0 && $$bindings.getWebComponent && getWebComponent !== void 0)
    $$bindings.getWebComponent(getWebComponent);
  return `<vm-hls${add_attribute("class", className, 0)}${add_attribute("style", style, 0)}${add_attribute("version", version, 0)}${add_attribute("lib-src", libSrc, 0)}${add_attribute("config", config, 0)}${add_attribute("cross-origin", crossOrigin, 0)}${add_attribute("preload", preload, 0)}${add_attribute("poster", poster, 0)}${add_attribute("controls-list", controlsList, 0)}${add_attribute("auto-pip", autoPiP, 0)}${add_attribute("disable-pip", disablePiP, 0)}${add_attribute("disable-remote-playback", disableRemotePlayback, 0)}${add_attribute("playback-ready", playbackReady, 0)}${add_attribute("media-title", mediaTitle, 0)}${add_attribute("this", __ref, 0)}>${slots.default ? slots.default({}) : ``}</vm-hls>`;
});
define$1("vm-icon", VmIcon);
define$1("vm-icon-library", VmIconLibrary);
define$1("vm-live-indicator", VmLiveIndicator);
define$1("vm-loading-screen", VmLoadingScreen);
define$1("vm-menu", VmMenu);
define$1("vm-menu-item", VmMenuItem);
define$1("vm-icon", VmIcon);
define$1("vm-menu-radio", VmMenuRadio);
define$1("vm-icon", VmIcon);
define$1("vm-menu-item", VmMenuItem);
define$1("vm-menu-radio-group", VmMenuRadioGroup);
define$1("vm-mute-control", VmMuteControl);
define$1("vm-control", VmControl);
define$1("vm-icon", VmIcon);
define$1("vm-tooltip", VmTooltip);
define$1("vm-pip-control", VmPipControl);
define$1("vm-control", VmControl);
define$1("vm-icon", VmIcon);
define$1("vm-tooltip", VmTooltip);
define$1("vm-playback-control", VmPlaybackControl);
define$1("vm-control", VmControl);
define$1("vm-icon", VmIcon);
define$1("vm-tooltip", VmTooltip);
define$1("vm-player", VmPlayer);
const Player$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let __ref;
  createEventDispatcher();
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { logger = void 0 } = $$props;
  let { theme = void 0 } = $$props;
  let { icons = "vime" } = $$props;
  let { paused = true } = $$props;
  let { playing = false } = $$props;
  let { duration = -1 } = $$props;
  let { mediaTitle = void 0 } = $$props;
  let { currentProvider = void 0 } = $$props;
  let { currentSrc = void 0 } = $$props;
  let { currentPoster = void 0 } = $$props;
  let { currentTime = 0 } = $$props;
  let { autoplay = false } = $$props;
  let { ready = false } = $$props;
  let { playbackReady = false } = $$props;
  let { loop = false } = $$props;
  let { muted = false } = $$props;
  let { buffered = 0 } = $$props;
  let { playbackRate = 1 } = $$props;
  let { playbackRates = [1] } = $$props;
  let { playbackQuality = void 0 } = $$props;
  let { playbackQualities = [] } = $$props;
  let { seeking = false } = $$props;
  let { debug = false } = $$props;
  let { playbackStarted = false } = $$props;
  let { playbackEnded = false } = $$props;
  let { buffering = false } = $$props;
  let { controls = false } = $$props;
  let { isControlsActive = false } = $$props;
  let { isSettingsActive = false } = $$props;
  let { volume = 50 } = $$props;
  let { isFullscreenActive = false } = $$props;
  let { aspectRatio = "16:9" } = $$props;
  let { viewType = void 0 } = $$props;
  let { isAudioView = false } = $$props;
  let { isVideoView = false } = $$props;
  let { mediaType = void 0 } = $$props;
  let { isAudio = false } = $$props;
  let { isVideo = false } = $$props;
  let { isLive = false } = $$props;
  let { isMobile = false } = $$props;
  let { isTouch = false } = $$props;
  let { isPiPActive = false } = $$props;
  let { textTracks = [] } = $$props;
  let { currentTextTrack = -1 } = $$props;
  let { isTextTrackVisible = true } = $$props;
  let { shouldRenderNativeTextTracks = true } = $$props;
  let { audioTracks = [] } = $$props;
  let { currentAudioTrack = -1 } = $$props;
  let { autopause = true } = $$props;
  let { playsinline = false } = $$props;
  let { language = "en" } = $$props;
  let { translations = void 0 } = $$props;
  let { languages = ["en"] } = $$props;
  let { i18n = void 0 } = $$props;
  const getProvider = (...args) => __ref.getProvider(...args);
  const getAdapter = (...args) => __ref.getAdapter(...args);
  const play = (...args) => __ref.play(...args);
  const pause = (...args) => __ref.pause(...args);
  const canPlay = (...args) => __ref.canPlay(...args);
  const canAutoplay = (...args) => __ref.canAutoplay(...args);
  const canMutedAutoplay = (...args) => __ref.canMutedAutoplay(...args);
  const canSetPlaybackRate = (...args) => __ref.canSetPlaybackRate(...args);
  const canSetPlaybackQuality = (...args) => __ref.canSetPlaybackQuality(...args);
  const canSetFullscreen = (...args) => __ref.canSetFullscreen(...args);
  const enterFullscreen = (...args) => __ref.enterFullscreen(...args);
  const exitFullscreen = (...args) => __ref.exitFullscreen(...args);
  const canSetPiP = (...args) => __ref.canSetPiP(...args);
  const enterPiP = (...args) => __ref.enterPiP(...args);
  const exitPiP = (...args) => __ref.exitPiP(...args);
  const canSetAudioTrack = (...args) => __ref.canSetAudioTrack(...args);
  const setCurrentAudioTrack = (...args) => __ref.setCurrentAudioTrack(...args);
  const canSetTextTrack = (...args) => __ref.canSetTextTrack(...args);
  const setCurrentTextTrack = (...args) => __ref.setCurrentTextTrack(...args);
  const canSetTextTrackVisibility = (...args) => __ref.canSetTextTrackVisibility(...args);
  const setTextTrackVisibility = (...args) => __ref.setTextTrackVisibility(...args);
  const extendLanguage = (...args) => __ref.extendLanguage(...args);
  const getContainer = (...args) => __ref.getContainer(...args);
  const callAdapter = (...args) => __ref.callAdapter(...args);
  const ref = () => __ref;
  const getWebComponent = () => __ref;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.logger === void 0 && $$bindings.logger && logger !== void 0)
    $$bindings.logger(logger);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.icons === void 0 && $$bindings.icons && icons !== void 0)
    $$bindings.icons(icons);
  if ($$props.paused === void 0 && $$bindings.paused && paused !== void 0)
    $$bindings.paused(paused);
  if ($$props.playing === void 0 && $$bindings.playing && playing !== void 0)
    $$bindings.playing(playing);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.mediaTitle === void 0 && $$bindings.mediaTitle && mediaTitle !== void 0)
    $$bindings.mediaTitle(mediaTitle);
  if ($$props.currentProvider === void 0 && $$bindings.currentProvider && currentProvider !== void 0)
    $$bindings.currentProvider(currentProvider);
  if ($$props.currentSrc === void 0 && $$bindings.currentSrc && currentSrc !== void 0)
    $$bindings.currentSrc(currentSrc);
  if ($$props.currentPoster === void 0 && $$bindings.currentPoster && currentPoster !== void 0)
    $$bindings.currentPoster(currentPoster);
  if ($$props.currentTime === void 0 && $$bindings.currentTime && currentTime !== void 0)
    $$bindings.currentTime(currentTime);
  if ($$props.autoplay === void 0 && $$bindings.autoplay && autoplay !== void 0)
    $$bindings.autoplay(autoplay);
  if ($$props.ready === void 0 && $$bindings.ready && ready !== void 0)
    $$bindings.ready(ready);
  if ($$props.playbackReady === void 0 && $$bindings.playbackReady && playbackReady !== void 0)
    $$bindings.playbackReady(playbackReady);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.muted === void 0 && $$bindings.muted && muted !== void 0)
    $$bindings.muted(muted);
  if ($$props.buffered === void 0 && $$bindings.buffered && buffered !== void 0)
    $$bindings.buffered(buffered);
  if ($$props.playbackRate === void 0 && $$bindings.playbackRate && playbackRate !== void 0)
    $$bindings.playbackRate(playbackRate);
  if ($$props.playbackRates === void 0 && $$bindings.playbackRates && playbackRates !== void 0)
    $$bindings.playbackRates(playbackRates);
  if ($$props.playbackQuality === void 0 && $$bindings.playbackQuality && playbackQuality !== void 0)
    $$bindings.playbackQuality(playbackQuality);
  if ($$props.playbackQualities === void 0 && $$bindings.playbackQualities && playbackQualities !== void 0)
    $$bindings.playbackQualities(playbackQualities);
  if ($$props.seeking === void 0 && $$bindings.seeking && seeking !== void 0)
    $$bindings.seeking(seeking);
  if ($$props.debug === void 0 && $$bindings.debug && debug !== void 0)
    $$bindings.debug(debug);
  if ($$props.playbackStarted === void 0 && $$bindings.playbackStarted && playbackStarted !== void 0)
    $$bindings.playbackStarted(playbackStarted);
  if ($$props.playbackEnded === void 0 && $$bindings.playbackEnded && playbackEnded !== void 0)
    $$bindings.playbackEnded(playbackEnded);
  if ($$props.buffering === void 0 && $$bindings.buffering && buffering !== void 0)
    $$bindings.buffering(buffering);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0)
    $$bindings.controls(controls);
  if ($$props.isControlsActive === void 0 && $$bindings.isControlsActive && isControlsActive !== void 0)
    $$bindings.isControlsActive(isControlsActive);
  if ($$props.isSettingsActive === void 0 && $$bindings.isSettingsActive && isSettingsActive !== void 0)
    $$bindings.isSettingsActive(isSettingsActive);
  if ($$props.volume === void 0 && $$bindings.volume && volume !== void 0)
    $$bindings.volume(volume);
  if ($$props.isFullscreenActive === void 0 && $$bindings.isFullscreenActive && isFullscreenActive !== void 0)
    $$bindings.isFullscreenActive(isFullscreenActive);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0)
    $$bindings.aspectRatio(aspectRatio);
  if ($$props.viewType === void 0 && $$bindings.viewType && viewType !== void 0)
    $$bindings.viewType(viewType);
  if ($$props.isAudioView === void 0 && $$bindings.isAudioView && isAudioView !== void 0)
    $$bindings.isAudioView(isAudioView);
  if ($$props.isVideoView === void 0 && $$bindings.isVideoView && isVideoView !== void 0)
    $$bindings.isVideoView(isVideoView);
  if ($$props.mediaType === void 0 && $$bindings.mediaType && mediaType !== void 0)
    $$bindings.mediaType(mediaType);
  if ($$props.isAudio === void 0 && $$bindings.isAudio && isAudio !== void 0)
    $$bindings.isAudio(isAudio);
  if ($$props.isVideo === void 0 && $$bindings.isVideo && isVideo !== void 0)
    $$bindings.isVideo(isVideo);
  if ($$props.isLive === void 0 && $$bindings.isLive && isLive !== void 0)
    $$bindings.isLive(isLive);
  if ($$props.isMobile === void 0 && $$bindings.isMobile && isMobile !== void 0)
    $$bindings.isMobile(isMobile);
  if ($$props.isTouch === void 0 && $$bindings.isTouch && isTouch !== void 0)
    $$bindings.isTouch(isTouch);
  if ($$props.isPiPActive === void 0 && $$bindings.isPiPActive && isPiPActive !== void 0)
    $$bindings.isPiPActive(isPiPActive);
  if ($$props.textTracks === void 0 && $$bindings.textTracks && textTracks !== void 0)
    $$bindings.textTracks(textTracks);
  if ($$props.currentTextTrack === void 0 && $$bindings.currentTextTrack && currentTextTrack !== void 0)
    $$bindings.currentTextTrack(currentTextTrack);
  if ($$props.isTextTrackVisible === void 0 && $$bindings.isTextTrackVisible && isTextTrackVisible !== void 0)
    $$bindings.isTextTrackVisible(isTextTrackVisible);
  if ($$props.shouldRenderNativeTextTracks === void 0 && $$bindings.shouldRenderNativeTextTracks && shouldRenderNativeTextTracks !== void 0)
    $$bindings.shouldRenderNativeTextTracks(shouldRenderNativeTextTracks);
  if ($$props.audioTracks === void 0 && $$bindings.audioTracks && audioTracks !== void 0)
    $$bindings.audioTracks(audioTracks);
  if ($$props.currentAudioTrack === void 0 && $$bindings.currentAudioTrack && currentAudioTrack !== void 0)
    $$bindings.currentAudioTrack(currentAudioTrack);
  if ($$props.autopause === void 0 && $$bindings.autopause && autopause !== void 0)
    $$bindings.autopause(autopause);
  if ($$props.playsinline === void 0 && $$bindings.playsinline && playsinline !== void 0)
    $$bindings.playsinline(playsinline);
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.translations === void 0 && $$bindings.translations && translations !== void 0)
    $$bindings.translations(translations);
  if ($$props.languages === void 0 && $$bindings.languages && languages !== void 0)
    $$bindings.languages(languages);
  if ($$props.i18n === void 0 && $$bindings.i18n && i18n !== void 0)
    $$bindings.i18n(i18n);
  if ($$props.getProvider === void 0 && $$bindings.getProvider && getProvider !== void 0)
    $$bindings.getProvider(getProvider);
  if ($$props.getAdapter === void 0 && $$bindings.getAdapter && getAdapter !== void 0)
    $$bindings.getAdapter(getAdapter);
  if ($$props.play === void 0 && $$bindings.play && play !== void 0)
    $$bindings.play(play);
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  if ($$props.canPlay === void 0 && $$bindings.canPlay && canPlay !== void 0)
    $$bindings.canPlay(canPlay);
  if ($$props.canAutoplay === void 0 && $$bindings.canAutoplay && canAutoplay !== void 0)
    $$bindings.canAutoplay(canAutoplay);
  if ($$props.canMutedAutoplay === void 0 && $$bindings.canMutedAutoplay && canMutedAutoplay !== void 0)
    $$bindings.canMutedAutoplay(canMutedAutoplay);
  if ($$props.canSetPlaybackRate === void 0 && $$bindings.canSetPlaybackRate && canSetPlaybackRate !== void 0)
    $$bindings.canSetPlaybackRate(canSetPlaybackRate);
  if ($$props.canSetPlaybackQuality === void 0 && $$bindings.canSetPlaybackQuality && canSetPlaybackQuality !== void 0)
    $$bindings.canSetPlaybackQuality(canSetPlaybackQuality);
  if ($$props.canSetFullscreen === void 0 && $$bindings.canSetFullscreen && canSetFullscreen !== void 0)
    $$bindings.canSetFullscreen(canSetFullscreen);
  if ($$props.enterFullscreen === void 0 && $$bindings.enterFullscreen && enterFullscreen !== void 0)
    $$bindings.enterFullscreen(enterFullscreen);
  if ($$props.exitFullscreen === void 0 && $$bindings.exitFullscreen && exitFullscreen !== void 0)
    $$bindings.exitFullscreen(exitFullscreen);
  if ($$props.canSetPiP === void 0 && $$bindings.canSetPiP && canSetPiP !== void 0)
    $$bindings.canSetPiP(canSetPiP);
  if ($$props.enterPiP === void 0 && $$bindings.enterPiP && enterPiP !== void 0)
    $$bindings.enterPiP(enterPiP);
  if ($$props.exitPiP === void 0 && $$bindings.exitPiP && exitPiP !== void 0)
    $$bindings.exitPiP(exitPiP);
  if ($$props.canSetAudioTrack === void 0 && $$bindings.canSetAudioTrack && canSetAudioTrack !== void 0)
    $$bindings.canSetAudioTrack(canSetAudioTrack);
  if ($$props.setCurrentAudioTrack === void 0 && $$bindings.setCurrentAudioTrack && setCurrentAudioTrack !== void 0)
    $$bindings.setCurrentAudioTrack(setCurrentAudioTrack);
  if ($$props.canSetTextTrack === void 0 && $$bindings.canSetTextTrack && canSetTextTrack !== void 0)
    $$bindings.canSetTextTrack(canSetTextTrack);
  if ($$props.setCurrentTextTrack === void 0 && $$bindings.setCurrentTextTrack && setCurrentTextTrack !== void 0)
    $$bindings.setCurrentTextTrack(setCurrentTextTrack);
  if ($$props.canSetTextTrackVisibility === void 0 && $$bindings.canSetTextTrackVisibility && canSetTextTrackVisibility !== void 0)
    $$bindings.canSetTextTrackVisibility(canSetTextTrackVisibility);
  if ($$props.setTextTrackVisibility === void 0 && $$bindings.setTextTrackVisibility && setTextTrackVisibility !== void 0)
    $$bindings.setTextTrackVisibility(setTextTrackVisibility);
  if ($$props.extendLanguage === void 0 && $$bindings.extendLanguage && extendLanguage !== void 0)
    $$bindings.extendLanguage(extendLanguage);
  if ($$props.getContainer === void 0 && $$bindings.getContainer && getContainer !== void 0)
    $$bindings.getContainer(getContainer);
  if ($$props.callAdapter === void 0 && $$bindings.callAdapter && callAdapter !== void 0)
    $$bindings.callAdapter(callAdapter);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.getWebComponent === void 0 && $$bindings.getWebComponent && getWebComponent !== void 0)
    $$bindings.getWebComponent(getWebComponent);
  return `<vm-player${add_attribute("class", className, 0)}${add_attribute("style", style, 0)}${add_attribute("theme", theme, 0)}${add_attribute("icons", icons, 0)}${add_attribute("paused", paused, 0)}${add_attribute("playing", playing, 0)}${add_attribute("duration", duration, 0)}${add_attribute("media-title", mediaTitle, 0)}${add_attribute("current-provider", currentProvider, 0)}${add_attribute("current-src", currentSrc, 0)}${add_attribute("current-poster", currentPoster, 0)}${add_attribute("current-time", currentTime, 0)} ${autoplay ? "autoplay" : ""}${add_attribute("ready", ready, 0)}${add_attribute("playback-ready", playbackReady, 0)} ${loop ? "loop" : ""} ${muted ? "muted" : ""}${add_attribute("buffered", buffered, 0)}${add_attribute("playback-rate", playbackRate, 0)}${add_attribute("playback-quality", playbackQuality, 0)}${add_attribute("seeking", seeking, 0)}${add_attribute("debug", debug, 0)}${add_attribute("playback-started", playbackStarted, 0)}${add_attribute("playback-ended", playbackEnded, 0)}${add_attribute("buffering", buffering, 0)} ${controls ? "controls" : ""}${add_attribute("is-controls-active", isControlsActive, 0)}${add_attribute("is-settings-active", isSettingsActive, 0)}${add_attribute("volume", volume, 0)}${add_attribute("is-fullscreen-active", isFullscreenActive, 0)}${add_attribute("aspect-ratio", aspectRatio, 0)}${add_attribute("view-type", viewType, 0)}${add_attribute("is-audio-view", isAudioView, 0)}${add_attribute("is-video-view", isVideoView, 0)}${add_attribute("media-type", mediaType, 0)}${add_attribute("is-audio", isAudio, 0)}${add_attribute("is-video", isVideo, 0)}${add_attribute("is-live", isLive, 0)}${add_attribute("is-mobile", isMobile, 0)}${add_attribute("is-touch", isTouch, 0)}${add_attribute("is-pi-p-active", isPiPActive, 0)}${add_attribute("current-text-track", currentTextTrack, 0)}${add_attribute("is-text-track-visible", isTextTrackVisible, 0)}${add_attribute("should-render-native-text-tracks", shouldRenderNativeTextTracks, 0)}${add_attribute("current-audio-track", currentAudioTrack, 0)}${add_attribute("autopause", autopause, 0)} ${playsinline ? "playsinline" : ""}${add_attribute("language", language, 0)}${add_attribute("this", __ref, 0)}>${slots.default ? slots.default({}) : ``}</vm-player>`;
});
define$1("vm-poster", VmPoster);
define$1("vm-scrim", VmScrim);
define$1("vm-scrubber-control", VmScrubberControl);
define$1("vm-slider", VmSlider);
define$1("vm-tooltip", VmTooltip);
define$1("vm-settings", VmSettings);
define$1("vm-menu", VmMenu);
define$1("vm-settings-control", VmSettingsControl);
define$1("vm-control", VmControl);
define$1("vm-icon", VmIcon);
define$1("vm-tooltip", VmTooltip);
define$1("vm-skeleton", VmSkeleton);
define$1("vm-slider", VmSlider);
define$1("vm-spinner", VmSpinner);
define$1("vm-submenu", VmSubmenu);
define$1("vm-icon", VmIcon);
define$1("vm-menu", VmMenu);
define$1("vm-menu-item", VmMenuItem);
define$1("vm-time", VmTime);
define$1("vm-time-progress", VmTimeProgress);
define$1("vm-current-time", VmCurrentTime);
define$1("vm-time", VmTime);
define$1("vm-end-time", VmEndTime);
define$1("vm-tooltip", VmTooltip);
define$1("vm-ui", VmUi);
define$1("vm-video", VmVideo);
define$1("vm-file", VmFile);
define$1("vm-vimeo", VmVimeo);
define$1("vm-embed", VmEmbed);
define$1("vm-volume-control", VmVolumeControl);
define$1("vm-control", VmControl);
define$1("vm-icon", VmIcon);
define$1("vm-mute-control", VmMuteControl);
define$1("vm-tooltip", VmTooltip);
define$1("vm-slider", VmSlider);
define$1("vm-youtube", VmYoutube);
define$1("vm-embed", VmEmbed);
const DefaultUi = DefaultUi$1;
const Hls = Hls$1;
const Player = Player$1;
const define = (tagName, clazz) => {
  const isClient = typeof window !== "undefined";
  if (isClient && !customElements.get(tagName))
    customElements.define(tagName, clazz);
};
define("vm-audio", VmAudio);
define("vm-file", VmFile);
define("vm-caption-control", VmCaptionControl);
define("vm-control", VmControl);
define("vm-icon", VmIcon);
define("vm-tooltip", VmTooltip);
define("vm-captions", VmCaptions);
define("vm-click-to-play", VmClickToPlay);
define("vm-control", VmControl);
define("vm-control-group", VmControlGroup);
define("vm-control-spacer", VmControlSpacer);
define("vm-controls", VmControls);
define("vm-current-time", VmCurrentTime);
define("vm-time", VmTime);
define("vm-dailymotion", VmDailymotion);
define("vm-embed", VmEmbed);
define("vm-dash", VmDash);
define("vm-file", VmFile);
define("vm-video", VmVideo);
define("vm-dbl-click-fullscreen", VmDblClickFullscreen);
define("vm-default-controls", VmDefaultControls);
define("vm-caption-control", VmCaptionControl);
define("vm-control", VmControl);
define("vm-icon", VmIcon);
define("vm-tooltip", VmTooltip);
define("vm-control-group", VmControlGroup);
define("vm-control-spacer", VmControlSpacer);
define("vm-controls", VmControls);
define("vm-current-time", VmCurrentTime);
define("vm-time", VmTime);
define("vm-end-time", VmEndTime);
define("vm-fullscreen-control", VmFullscreenControl);
define("vm-live-indicator", VmLiveIndicator);
define("vm-mute-control", VmMuteControl);
define("vm-pip-control", VmPipControl);
define("vm-playback-control", VmPlaybackControl);
define("vm-scrim", VmScrim);
define("vm-scrubber-control", VmScrubberControl);
define("vm-slider", VmSlider);
define("vm-settings-control", VmSettingsControl);
define("vm-time-progress", VmTimeProgress);
define("vm-volume-control", VmVolumeControl);
define("vm-default-settings", VmDefaultSettings);
define("vm-icon", VmIcon);
define("vm-menu", VmMenu);
define("vm-menu-item", VmMenuItem);
define("vm-menu-radio", VmMenuRadio);
define("vm-menu-radio-group", VmMenuRadioGroup);
define("vm-settings", VmSettings);
define("vm-submenu", VmSubmenu);
define("vm-default-ui", VmDefaultUi);
define("vm-caption-control", VmCaptionControl);
define("vm-control", VmControl);
define("vm-icon", VmIcon);
define("vm-tooltip", VmTooltip);
define("vm-captions", VmCaptions);
define("vm-click-to-play", VmClickToPlay);
define("vm-control-group", VmControlGroup);
define("vm-control-spacer", VmControlSpacer);
define("vm-controls", VmControls);
define("vm-current-time", VmCurrentTime);
define("vm-time", VmTime);
define("vm-dbl-click-fullscreen", VmDblClickFullscreen);
define("vm-default-controls", VmDefaultControls);
define("vm-end-time", VmEndTime);
define("vm-fullscreen-control", VmFullscreenControl);
define("vm-live-indicator", VmLiveIndicator);
define("vm-mute-control", VmMuteControl);
define("vm-pip-control", VmPipControl);
define("vm-playback-control", VmPlaybackControl);
define("vm-scrim", VmScrim);
define("vm-scrubber-control", VmScrubberControl);
define("vm-slider", VmSlider);
define("vm-settings-control", VmSettingsControl);
define("vm-time-progress", VmTimeProgress);
define("vm-volume-control", VmVolumeControl);
define("vm-default-settings", VmDefaultSettings);
define("vm-menu", VmMenu);
define("vm-menu-item", VmMenuItem);
define("vm-menu-radio", VmMenuRadio);
define("vm-menu-radio-group", VmMenuRadioGroup);
define("vm-settings", VmSettings);
define("vm-submenu", VmSubmenu);
define("vm-loading-screen", VmLoadingScreen);
define("vm-poster", VmPoster);
define("vm-spinner", VmSpinner);
define("vm-ui", VmUi);
define("vm-embed", VmEmbed);
define("vm-end-time", VmEndTime);
define("vm-time", VmTime);
define("vm-file", VmFile);
define("vm-fullscreen-control", VmFullscreenControl);
define("vm-control", VmControl);
define("vm-icon", VmIcon);
define("vm-tooltip", VmTooltip);
define("vm-hls", VmHls);
define("vm-file", VmFile);
define("vm-video", VmVideo);
define("vm-icon", VmIcon);
define("vm-icon-library", VmIconLibrary);
define("vm-live-indicator", VmLiveIndicator);
define("vm-loading-screen", VmLoadingScreen);
define("vm-menu", VmMenu);
define("vm-menu-item", VmMenuItem);
define("vm-icon", VmIcon);
define("vm-menu-radio", VmMenuRadio);
define("vm-icon", VmIcon);
define("vm-menu-item", VmMenuItem);
define("vm-menu-radio-group", VmMenuRadioGroup);
define("vm-mute-control", VmMuteControl);
define("vm-control", VmControl);
define("vm-icon", VmIcon);
define("vm-tooltip", VmTooltip);
define("vm-pip-control", VmPipControl);
define("vm-control", VmControl);
define("vm-icon", VmIcon);
define("vm-tooltip", VmTooltip);
define("vm-playback-control", VmPlaybackControl);
define("vm-control", VmControl);
define("vm-icon", VmIcon);
define("vm-tooltip", VmTooltip);
define("vm-player", VmPlayer);
define("vm-poster", VmPoster);
define("vm-scrim", VmScrim);
define("vm-scrubber-control", VmScrubberControl);
define("vm-slider", VmSlider);
define("vm-tooltip", VmTooltip);
define("vm-settings", VmSettings);
define("vm-menu", VmMenu);
define("vm-settings-control", VmSettingsControl);
define("vm-control", VmControl);
define("vm-icon", VmIcon);
define("vm-tooltip", VmTooltip);
define("vm-skeleton", VmSkeleton);
define("vm-slider", VmSlider);
define("vm-spinner", VmSpinner);
define("vm-submenu", VmSubmenu);
define("vm-icon", VmIcon);
define("vm-menu", VmMenu);
define("vm-menu-item", VmMenuItem);
define("vm-time", VmTime);
define("vm-time-progress", VmTimeProgress);
define("vm-current-time", VmCurrentTime);
define("vm-time", VmTime);
define("vm-end-time", VmEndTime);
define("vm-tooltip", VmTooltip);
define("vm-ui", VmUi);
define("vm-video", VmVideo);
define("vm-file", VmFile);
define("vm-vimeo", VmVimeo);
define("vm-embed", VmEmbed);
define("vm-volume-control", VmVolumeControl);
define("vm-control", VmControl);
define("vm-icon", VmIcon);
define("vm-mute-control", VmMuteControl);
define("vm-tooltip", VmTooltip);
define("vm-slider", VmSlider);
define("vm-youtube", VmYoutube);
define("vm-embed", VmEmbed);

export { DefaultUi as D, Hls as H, Player as P };
//# sourceMappingURL=usePlayerStore-1903c19b.js.map
