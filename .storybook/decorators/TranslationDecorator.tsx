import React, { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from '../../src/shared/config/i18n/i18nForTests';

export const TranslationDecorator = (Story:any) => (<Suspense fallback={<div>loading translations...</div>}>
<I18nextProvider i18n={i18n}><Story /></I18nextProvider></Suspense>)