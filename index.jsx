import React from 'react';
import Navigation from './app/processes/Navigation';
import { NativeBaseProvider } from 'native-base';


export default function Index() {
  return  <NativeBaseProvider><Navigation /></NativeBaseProvider> ;
}