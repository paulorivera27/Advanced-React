import propTypes from 'prop-types';
import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>This is the page component</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: propTypes.any,
};
