import React, { Fragment } from 'react';
import {WelcomeMessage} from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import Search from '../Settings/Search';


export default function (){
    return <Page name={'settings'}>
        <WelcomeMessage />
        <CoinGrid topSection />
        <ConfirmButton />
        <Search />
        <CoinGrid />
    </Page>
}