/**
 *
 * LeftMenu
 *
 */

import React from 'react';
import LeftMenuLink from 'components/LeftMenuLink';

import styles from './styles.css';

class LeftMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  links = [{
    label: 'General',
    value: 'general',
    to: '',
  }, {
    label: 'Languages',
    value: 'languages',
    to: 'languages',
  }, {
    label: 'Databases',
    value: 'databases',
    to: 'databases',
  }, {
    label: 'Security',
    value: 'security',
    to: 'security',
  }, {
    label: 'Server',
    value: 'server',
    to: 'server',
  }, {
    label: 'Advanced',
    value: 'advanced',
    to: 'advanced',
  }];

  render() {

    const linksElements = this.links.map((link, i) => (<LeftMenuLink key={i} link={link}></LeftMenuLink>));

    return (
      <div className={styles.leftMenu}>
        <nav className={styles.leftMenuNav}>
          <ul className={styles.leftMenuList}>
            {linksElements}
          </ul>
        </nav>
      </div>
    );
  }
}

export default LeftMenu;
