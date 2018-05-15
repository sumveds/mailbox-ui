import update from 'immutability-helper';
import { LOAD_EMAILS, ACTIVE_SECTION, SECTIONS} from '../Constants';

const initialState = {
  emails: [],
  activeSection: SECTIONS[1]
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_EMAILS: return update(state, {
			emails: {$set: action.emails}
  	});
  	case ACTIVE_SECTION : return update(state, {
			activeSection: {$set: action.section}
  	});
  	default: return state;
	}
};