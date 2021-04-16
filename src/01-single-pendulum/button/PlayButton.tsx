import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import IconButton from './IconButton';

type PlayButtonState = {
  playing: boolean;
};

class PlayButton extends Component<{}, PlayButtonState> {
  state = {
    playing: false,
  };

  constructor({}) {
    super({});
  }

  toggle = () => {
    this.setState(state => ({playing: !state.playing}));
  }

  isPlaying = () => {
    return this.state.playing;
  }

  render() {
    const buttonClass = !this.state.playing ? 'play-button' : 'stop-button';
    const icon = !this.state.playing ? faPlay : faStop;
    return (
      <IconButton
        action={this.toggle}
        buttonClass={buttonClass}
        icon={icon}
      />
    );
  }
}

export default PlayButton;
