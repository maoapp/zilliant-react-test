import configureStore from 'redux-mock-store'

import { 
  fetchUser
} from '../user';

const mockStore = configureStore();
const store = mockStore();

describe('actions', ()=> {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  })

  it('Should call fetchRepos function', () => {
    expect(fetchUser({})).toBeInstanceOf(Function)
  })
})
