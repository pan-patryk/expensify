import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import React from 'react';


test('should view two expences', () => {
    const wrapper = shallow(<ExpensesSummary
        expenseCount={4}
        expensesTotal={355}
    />)
    expect(wrapper).toMatchSnapshot();

});

test('should view one expence', () => {
    const wrapper = shallow(<ExpensesSummary
        expenseCount={1}
        expensesTotal={55}
    />)
    expect(wrapper).toMatchSnapshot();
});