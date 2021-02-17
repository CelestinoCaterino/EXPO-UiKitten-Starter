import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const CartIcon = (props) => (
  <Icon {...props} name='shopping-cart-outline'/>
);

const ShopIcon = (props) => (
  <Icon {...props} name='shopping-bag-outline'/>
);

const useBottomNavigationState = (initialState = 0) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

export const BottomNav = () => {

  const topState = useBottomNavigationState();
  const bottomState = useBottomNavigationState();

  return (
    <React.Fragment>

      <BottomNavigation style={styles.bottomNavigation} {...topState}>
        <BottomNavigationTab title='Shop' icon={ShopIcon}/>
        <BottomNavigationTab title='Cart' icon={CartIcon}/>
        <BottomNavigationTab title='Me' icon={PersonIcon}/>
      </BottomNavigation>

    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
});