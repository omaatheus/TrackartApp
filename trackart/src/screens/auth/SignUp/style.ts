import { ImageBackground, StyleSheet, View } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
      flex: 1;
`;

export const Background = styled(ImageBackground)`
      flex: 1;
      width: 100%;
`;

export const Body = styled(View)`
`;

export const ViewInput = styled(View)`
  height: 180px;
  top: 47%;
`;

export const styles = StyleSheet.create({
  title: {
    top: '47%',
    marginLeft: '5%',

    fontSize: 30,
    fontWeight: '600',

    color: '#2F80ED',
  },

  newHere: {
    top: '70%',
    left: '6%',

    color: '#fff',
    fontWeight: '300',
  },

  enter: {
    color: '#fff',
    fontWeight: '400',
    marginLeft: 6,
    top: 3.

  }

})