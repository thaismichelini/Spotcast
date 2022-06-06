import React, { useState } from 'react';
import { Slider } from 'react-native';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronIcon } from '../components/icons/Chevron';
import { MoreVertIcon } from '../components/icons/MoreVert';
import { PlayIcon } from '../components/icons/Play';

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={['#464769', '#1B1A1F']}
      style={{
        flex: 1,
        paddingTop: 40,
      }}>
      {children}
    </LinearGradient>
  );
};

const TopBar = styled.View`
  flex-direction: row;
`;

TopBar.Left = styled.View`
  flex: 1;
  padding-left: 16px;
`;

TopBar.Right = styled.View`
  flex: 1;
  padding-right: 16px;
  align-items: flex-end;
`;

TopBar.Middle = styled.View`
  flex: 2;
  align-items: center;
`;

TopBar.Title = styled.Text`
  color: white;
  text-transform: uppercase;
`;

TopBar.SubTitle = styled.Text`
  color: white;
  font-weight: bold;
`;

const ScreenArea = styled.View`
  flex: 1;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
`;
const CoverArea = styled.View`
  flex: 4;
`;

CoverArea.Image = styled.Image`
  width: 100%;
  flex: 1;
`;

const PlayerArea = styled.View`
  flex: 2;
  justify-content: flex-end;
`;

PlayerArea.Title = styled.Text`
  color: white;
  font-size: 22px;
`;

PlayerArea.Author = styled.Text`
  color: #bbbbbb;
  font-size: 16px;
`;

const Controls = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

Controls.Play = styled.TouchableOpacity``;

Controls.Slider = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-basis: 100%;
  flex-wrap: wrap;
`;

Controls.Slider.CurrentTime = styled.Text`
  color: #bbbbbb;
`;

Controls.Slider.TotalTime = styled.Text`
  color: #bbbbbb;
`;

const AudioSlider = styled(Slider)`
  flex-basis: 100%;
`;

export function PlayerScreen() {
  const [segundos, setSegundos] = useState(0);
  return (
    <Background>
      <TopBar>
        <TopBar.Left>
          <ChevronIcon />
        </TopBar.Left>

        <TopBar.Middle>
          <TopBar.Title>Tocando Podcast</TopBar.Title>
          <TopBar.SubTitle>Hipster Ponto Tech</TopBar.SubTitle>
        </TopBar.Middle>

        <TopBar.Right>
          <MoreVertIcon />
        </TopBar.Right>
      </TopBar>

      <ScreenArea>
        <CoverArea>
          <CoverArea.Image
            resizeMode="contain"
            source={{
              uri: 'https://github.com/omariosouto/spotcast/raw/master/_docs/logo.png',
            }}
          />
        </CoverArea>
        <PlayerArea>
          <PlayerArea.Title>Angular vs React - Hipsters #142</PlayerArea.Title>
          <PlayerArea.Author>Hipsters Ponto Tech</PlayerArea.Author>
          <Controls>
            <Controls.Slider>
              <AudioSlider
                thumbTintColor="#FFFFFF"
                minimumTrackTintColor="#1DD65F"
                maximumTrackTintColor="#777777"
                minimumValue={0}
                maximumValue={100}
                value={segundos}
                onValueChange={(value) => {
                  setSegundos(value);
                }}
              />

              <Controls.Slider.CurrentTime>
                0:{segundos}
              </Controls.Slider.CurrentTime>
              <Controls.Slider.TotalTime>52:07</Controls.Slider.TotalTime>
            </Controls.Slider>
            <Controls.Play>
              <PlayIcon width={88} height={88} />
            </Controls.Play>
          </Controls>
        </PlayerArea>
      </ScreenArea>
    </Background>
  );
}
