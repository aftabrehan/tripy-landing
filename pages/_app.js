import PropTypes from 'prop-types'

import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

MyApp.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.object,
}

export default MyApp
