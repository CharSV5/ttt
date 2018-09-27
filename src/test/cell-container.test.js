import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import CellContainer from '../containers/cell-container';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

const wrapper = shallow(<CellContainer />);

describe('<CellContainer />', () => {
    it('renders 1 cell component', () => {
        expect(wrapper).toHaveLength(1);
    })
})