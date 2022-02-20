import React, {Fragment} from 'react';
import {IntlProvider} from 'react-intl';
import messages from './messages';

import {LOCALES} from './locales';

interface Props {
    children: Object,
    locale: typeof LOCALES.ENGLISH
}

const Provider = ({locale = LOCALES.ENGLISH}) => (

    <IntlProvider
        locale={locale}
        textComponent={Fragment}
        messages={messages[locale + '']}
    >

    </IntlProvider>

)

export default Provider;