import NavigationBar from './NavigationBar';

const Body = ({children}) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default Body;
