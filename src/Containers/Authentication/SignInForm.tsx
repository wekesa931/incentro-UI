import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import AuthPotter from './Potter/AuthPotter';
import { Store } from 'antd/lib/form/interface';
import { callPoint } from '../../Utility/AppStrings';
import Loader from '../../Utility/Loader';
import { Redirect } from 'react-router-dom';
import { PRIVATE_ROUTE } from '../../Utility/route.constants';

interface IProps {
    potter: AuthPotter
}

let potter: AuthPotter;

const SignInForm = (props: IProps) => {
    potter = props.potter;
    const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
    const [errorMessage, seterrorMessage] = useState('')
    const isLoggedIn = localStorage.getItem('id_token')

    React.useEffect(() => {
        if (isLoggedIn) {
          setRedirectToReferrer(true);
        }
      }, [isLoggedIn]);

    let { from } = { from: { pathname: PRIVATE_ROUTE.DASHBOARD } };

    if (redirectToReferrer) {
    return <Redirect to={from} />;
    }
    const onFinish = async (values: Store) => {
        try {
            const response = await axios.get(`${callPoint.ROOT_URL}/auth`,{
              // @ts-ignore
              params: {
                ...values,
                dashboard_id: "interview"
              }
            })
            if(response.status === 200){
              await localStorage.setItem('id_token', response.data.access_token)
              await localStorage.setItem('client_id', response.data.user.client_id)
            }
            potter.pushToRepository({ displayLogInLoader: false })
        } catch(e) {
            setTimeout(() => {
              seterrorMessage('Wrong email or password!')
              potter.pushToRepository({ displayLogInLoader: false })
            }, 500);

        }
  };

  return <>
    <div className='loader-container' style={{ display: potter.context.repository.displayLogInLoader ? 'block' : 'none' }}>
        <Loader />
    </div>
    <p style={{ color: 'red'}}>{errorMessage}</p>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button onClick={() => potter.pushToRepository({ displayLogInLoader: true })} type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  </>;
};

export default SignInForm;