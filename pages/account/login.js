import Link from 'next/link'
import Layout from '@/components/Layout'
import {Form, Button} from 'react-bootstrap'

export default function login() {
    return (
        <Layout>
            <div className="container text-center p-3">
                <div className="row justify-content-md-center pr-4 pl-4 pt-4 pb-2">
                    <div className="form-group col-md-3 mt-5 pb-6">
                        <Form className="form-group text-center">
                            <Form.Group className="form-group" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="form-group mt-4" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className="rounded-pill mt-3" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}