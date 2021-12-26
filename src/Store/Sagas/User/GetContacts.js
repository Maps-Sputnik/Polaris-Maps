import { put, call } from 'redux-saga/effects';
import Contacts from 'react-native-contacts';
import * as types from '@actions/types';
import { requestContactsPermission } from '@utils/Permissions';

function* getContacts(action) {
  try {
    const granted = yield call(requestContactsPermission);
    if (granted) {
      yield put({ type: types.ENABLE_LOADER, payload: { type: 'general' } });
      const contacts = yield call(Contacts.getAll);
      const formattedContacts = contacts.map((contact) => {
        const { recordID, emailAddresses, birthday, familyName, givenName, phoneNumbers } = contact;
        console.log('Contact~~~~~~~~~~~~', contact);
        return { recordID, emailAddresses, birthday, familyName, givenName, phoneNumbers };
      });
      yield put({ type: types.SET_CONTACTS, payload: formattedContacts });
      yield put({ type: types.DISABLE_LOADER, payload: { type: 'general' } });
    } else {
      yield put({ type: types.ENABLE_ERROR, payload: { message: 'Permission denied' } });
    }
  } catch (err) {
    console.warn(err);
  } finally {
    yield put({ type: types.DISABLE_LOADER, payload: { type: 'general' } });
    yield call(delay, 2000);
    yield put({ type: types.DISABLE_ERROR });
  }
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default getContacts;
