/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Formik } from 'formik';
import { toast } from "sonner"
import { useEffect, useState } from 'react';
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();
    const [token, setToken] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);

    const sesioon = useSession();

    console.log({ sesioon })

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const tokenFromQuery = query.get('token');
        const emailFromQuery = query.get('email');

        setToken(tokenFromQuery);
        setEmail(emailFromQuery);
    }, []);
    const [loginFromState, setLoginFromState] = useState({
        email: '',
        password: ''
    });
    useEffect(() => {
        const verifyEmail = async () => {
            if (token && email) {
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/auth/verify`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ token, email })
                    });

                    if (res.ok) {
                        toast.success('Email verified successfully');
                        setLoginFromState({ email, password: '' });
                    } else {
                        toast.error('Verification failed. Please try again');
                    }
                } catch (error: any) {
                    toast.error('An error occurred. Please try again');
                }
            } else {
                setLoginFromState({ email: '', password: '' });
            }

        };

        verifyEmail();
    }, [token, email]);

    return (
        <Tabs defaultValue="login" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <Formik
                    initialValues={loginFromState}
                    onSubmit={async (values) => {
                        try {
                            const res: any = await signIn('credentials', {
                                email: values.email,
                                password: values.password,
                                redirect: false,
                            });
                            if (res.ok) {
                                toast.success('Logged in successfully');
                                router.push('/dashboard');
                            } else {
                                toast.error('Login failed. Please try again');
                            }
                        } catch (error: any) {
                            console.log(error)
                            toast.error('An error occurred. Please try again');
                        }
                    }}
                >
                    {({ handleSubmit, values, handleChange, handleBlur }) => (
                        <form
                            onSubmit={handleSubmit}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>Welcome Back!</CardTitle>
                                    <CardDescription>
                                        Fill in your details to login to your account
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            placeholder="Please enter your email"
                                            id="email" type="email" defaultValue="" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            placeholder="Please enter your password"
                                            id="password" defaultValue="" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        type="submit"
                                    >Login</Button>
                                </CardFooter>
                            </Card>
                        </form>
                    )}
                </Formik>
            </TabsContent>
            <TabsContent value="register">

                <Formik
                    initialValues={{ email: '' }}
                    onSubmit={async (values) => {
                        try {
                            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/auth/register`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(values)
                            })

                            if (res.ok) {
                                toast.success('Email sent. Please check your inbox')
                            }
                        } catch (error: any) {
                            toast.error('An error occurred. Please try again')

                        }
                    }}
                >
                    {({ handleSubmit, values, handleChange, handleBlur }) => (

                        <form onSubmit={handleSubmit}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Create an account
                                    </CardTitle>
                                    <CardDescription>
                                        Fill in your details to create an account
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" name="email"
                                            onChange={handleChange} onBlur={handleBlur} value={values.email}
                                            placeholder="Please enter your email" />

                                    </div>

                                </CardContent>
                                <CardFooter>
                                    <Button
                                        type="submit"
                                    >Verify Email</Button>
                                </CardFooter>
                            </Card>
                        </form>
                    )}
                </Formik>

            </TabsContent>
        </Tabs >
    )
}
