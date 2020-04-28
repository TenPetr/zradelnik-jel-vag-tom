import React from "react";

import Layout from '../components/organisms/Layout';
import Button from '../components/atoms/Button';

const MainPage = () => {
  const MakeLogAfterClick = () => {
    return(
      console.log("button was clicked")
    );
  };

  return (
    <Layout>
       <div>Main Page</div>
       <Button>
         test button
       </Button>
    </Layout>   
    );
};

export default MainPage;
