import styles from './Layout.module.css';

const Layout = ({children}) => {
    return (
        <>
          <header className= {styles.header}> 
            <h1> Book App </h1> 
            <p><a href="#">react project</a> | React.js</p> 
          </header>

            {children}

          <footer className= {styles.footer}> <p>Devleoped by Sara Rahgoshy</p> </footer>  
        </>
    );
};

export default Layout;