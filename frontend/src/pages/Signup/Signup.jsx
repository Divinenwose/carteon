import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Signup = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [socialLoading, setSocialLoading] = useState({ google: false, apple: false });
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        agree: false
    });



    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setForm({

            ...form,

            [name]: type === "checkbox" ? checked : value

        });

    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!form.agree) {
            alert('Please agree to the Terms of Service and Privacy Policy');
            return;
        }

        // Validate form fields
        if (!form.name || !form.email || !form.password) {
            alert('Please fill in all fields');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Validate password strength
        if (form.password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        setLoading(true);
        
        try {
            const payload = {
                fullName: form.name,
                email: form.email,
                password: form.password
            };

            console.log('Sending registration payload:', payload);
            console.log('API URL:', `${import.meta.env.VITE_BACKEND_URL}api/v1/auth/register`);

            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}api/v1/auth/register`,
                payload,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );

            console.log('Registration response:', response.data);
            
            // Store any token if returned (for future use)
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }
            
            // Store user info if returned
            if (response.data.user) {
                localStorage.setItem('user', JSON.stringify(response.data.user));
            }

            // Show success message and navigate
            alert('Registration successful! Please check your email for OTP verification.');
            navigate('/login'); // or navigate to verification page if exists
            
        } catch (error) {
            console.error('Registration failed:', error);
            
            // Enhanced error logging
            if (error.response) {
                console.log('Error response data:', error.response.data);
                console.log('Error status:', error.response.status);
                console.log('Error headers:', error.response.headers);
                console.log('Full error response:', JSON.stringify(error.response, null, 2));
                
                // Try to extract more detailed error message
                const errorData = error.response.data;
                let errorMessage = 'Registration failed. Please try again.';
                
                // Handle different HTTP status codes
                if (error.response.status === 500) {
                    errorMessage = 'Server is experiencing issues. Please try again later or contact support if the problem persists.';
                } else if (error.response.status === 400) {
                    if (errorData) {
                        if (errorData.message) {
                            // Handle specific error cases
                            if (errorData.message.toLowerCase().includes('email already registered')) {
                                errorMessage = 'This email is already registered. Please use a different email or try logging in.';
                                // Offer to navigate to login
                                if (confirm('This email is already registered. Would you like to go to the login page?')) {
                                    navigate('/login');
                                    return; // Exit early to not show the alert again
                                }
                            } else if (errorData.message.toLowerCase().includes('email')) {
                                errorMessage = 'Invalid email address. Please check and try again.';
                            } else if (errorData.message.toLowerCase().includes('password')) {
                                errorMessage = 'Password is too weak. Please use a stronger password.';
                            } else {
                                errorMessage = errorData.message;
                            }
                        } else if (errorData.error) {
                            errorMessage = errorData.error;
                        } else if (typeof errorData === 'string') {
                            errorMessage = errorData;
                        } else {
                            errorMessage = JSON.stringify(errorData);
                        }
                    }
                } else if (error.response.status === 429) {
                    errorMessage = 'Too many registration attempts. Please wait a moment and try again.';
                } else {
                    // Handle other HTTP errors
                    if (errorData && errorData.message) {
                        errorMessage = errorData.message;
                    } else {
                        errorMessage = `Registration failed (${error.response.status}). Please try again.`;
                    }
                }
                
                alert(errorMessage);
            } else if (error.request) {
                console.log('Error request:', error.request);
                alert('Network error. Please check your connection and try again.');
            } else {
                console.log('Error message:', error.message);
                alert(`An error occurred: ${error.message}`);
            }
        } finally {
            setLoading(false);
        }
    };

    // Social Login Functions
    const handleSocialLogin = async (provider) => {
        setSocialLoading(prev => ({ ...prev, [provider]: true }));
        
        try {
            let idToken;
            
            if (provider === 'google') {
                // Initialize Google Sign-In
                const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
                
                if (!googleClientId) {
                    throw new Error('Google Client ID not configured');
                }
                
                // For now, we'll simulate the Google Sign-In flow
                // In production, you would use Google's JavaScript SDK
                console.log('Initiating Google Sign-In...');
                
                // Simulate getting ID token (replace with actual Google Sign-In implementation)
                // You would typically use: gapi.auth2.getAuthInstance().signIn()
                // or the newer Google Identity Services library
                
                // For demo purposes, we'll show an alert
                alert('Google Sign-In requires Google SDK integration. Please implement the Google OAuth flow.');
                return;
                
            } else if (provider === 'apple') {
                // Initialize Apple Sign-In
                // Apple Sign-In requires Apple's JavaScript SDK
                console.log('Initiating Apple Sign-In...');
                
                // Simulate getting ID token (replace with actual Apple Sign-In implementation)
                // You would typically use Apple's JavaScript SDK
                
                // For demo purposes, we'll show an alert
                alert('Apple Sign-In requires Apple SDK integration. Please implement the Apple Sign-In flow.');
                return;
            }
            
            // If we have an ID token, proceed with social login
            if (idToken) {
                const response = await axios.post(
                    `${import.meta.env.VITE_BACKEND_URL}api/v1/auth/social-login`,
                    {
                        provider: provider,
                        idToken: idToken
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    }
                );

                console.log(`${provider} login response:`, response.data);
                
                // Store token and user info
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                }
                
                if (response.data.user) {
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                }

                // Show success message and navigate
                alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login successful!`);
                navigate('/dashboard'); // or appropriate destination
            }
            
        } catch (error) {
            console.error(`${provider} login failed:`, error);
            
            // Handle different error types
            if (error.response) {
                const errorMessage = error.response.data?.message || `${provider} login failed. Please try again.`;
                alert(errorMessage);
            } else if (error.request) {
                alert('Network error. Please check your connection and try again.');
            } else {
                alert(`An error occurred with ${provider} login. Please try again.`);
            }
        } finally {
            setSocialLoading(prev => ({ ...prev, [provider]: false }));
        }
    };



    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#252C46] via-[#3B4266] to-[#1E2338]">

            <div className="bg-white w-[560px] my-[10px] p-6 rounded-xl shadow-xl border border-gray-200">

                <div className="flex flex-col gap-4">

                    <h2 className="font-Inter font-bold text-[25.5px] leading-[36px] text-[#0F172A] align-middle">Create your account</h2>

                    <div className="flex flex-col">

                        <h4 class="font-Inter font-medium text-[20px] leading-[20px] text-black">Join Carteon</h4>

                        <p class="font-Inter font-medium text-[14px] leading-[20px] text-black">Start your free account — no credit card required.</p>

                    </div>

                </div>

                <form onSubmit={handleSubmit} className="space-y-3 mt-5">

                    <div className="flex flex-col gap-2">

                        <label htmlFor="Full Name" class="font-Inter font-medium text-[16px] leading-[20px] text-[#1A1A1A] align-middle">Full Name</label>

                        <input

                            type="text"

                            name="name"

                            placeholder="e.g. Jane Doe"

                            onChange={handleChange}

                            className="w-full h-[44px] bg-white rounded-[8px] border border-[#D9D9D9] p-[10px]"

                        />

                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="Email" class="font-Inter font-medium text-[16px] leading-[20px] text-[#1A1A1A] align-middle">Email</label>
                        <input
                            type="email"

                            name="email"

                            placeholder="Name@gmail.com"

                            onChange={handleChange}

                            className="w-full h-[44px] bg-white rounded-[8px] border border-[#D9D9D9] p-[10px]"

                        />

                    </div>



                    <div className="flex flex-col gap-2">

                        <label htmlFor="Password" class="font-Inter font-medium text-[16px] leading-[20px] text-[#1A1A1A] align-middle">Password</label>

                        <input

                            type="password"

                            name="password"

                            placeholder="Enter your password"

                            onChange={handleChange}

                            className="w-fullh-[44px] bg-white rounded-[8px] border border-[#D9D9D9] p-[10px]"

                        />

                    </div>



                    <label className="flex items-start gap-2 text-sm">

                        <input

                            type="checkbox"

                            name="agree"

                            onChange={handleChange}

                            className="mt-1"

                        />

                        <span>

                            I agree to Carteon’s{" "}

                            <a href="/terms-conditions" className="text-[#252C46] underline font-medium cursor-pointer">

                                Terms of Service

                            </a>{" "}

                            and{" "}

                            <a href="/privacy-policy" className="text-[#252C46] underline font-medium cursor-pointer">

                                Privacy Policy

                            </a>

                        </span>

                    </label>



                    <button
                        type="submit"
                        disabled={!form.agree || loading}
                        className={`w-full py-3 rounded-md text-white font-medium transition-colors ${
                            form.agree && !loading
                                ? "bg-[#252C46] hover:bg-[#1E2338]"
                                : "bg-gray-300 cursor-not-allowed"
                        }`}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                </svg>
                                Creating account...
                            </span>
                        ) : (
                            'Create my account'
                        )}
                    </button>

                </form>

                <div className="flex items-center my-5">

                    <div className="flex-grow h-px bg-gray-300"></div>

                    <span className="px-3 text-xs text-gray-500">

                        Or continue with

                    </span>

                    <div className="flex-grow h-px bg-gray-300"></div>

                </div>

                <div className="flex gap-3">

                    <button 
                        onClick={() => handleSocialLogin('google')}
                        disabled={socialLoading.google}
                        className="flex items-center justify-center cursor-pointer gap-2 w-full border border-gray-300 py-2.5 rounded-md bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                    >
                        {socialLoading.google ? (
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                            </svg>
                        ) : (
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="google"
                                className="w-5 h-5"
                            />
                        )}
                        <span className="text-sm font-medium text-gray-700">
                            {socialLoading.google ? 'Connecting...' : 'Sign in with Google'}
                        </span>
                    </button>



                    {/* Apple */}

                    <button 
                        onClick={() => handleSocialLogin('apple')}
                        disabled={socialLoading.apple}
                        className="flex items-center justify-center cursor-pointer gap-2 w-full border border-gray-300 py-2.5 rounded-md bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                    >
                        {socialLoading.apple ? (
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                            </svg>
                        ) : (
                            <svg
                                className="w-5 h-5 text-black"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M16.365 1.43c0 1.14-.465 2.21-1.22 2.96-.81.82-2.13 1.45-3.28 1.36-.14-1.1.45-2.27 1.2-3.05.84-.85 2.27-1.46 3.3-1.27zM20.92 17.05c-.58 1.35-.86 1.95-1.6 3.13-1.03 1.65-2.49 3.7-4.29 3.72-1.6.02-2.01-1.04-4.18-1.03-2.18.01-2.63 1.05-4.23 1.01-1.8-.03-3.19-1.87-4.22-3.52-2.89-4.55-3.2-9.9-1.41-12.67 1.27-1.96 3.27-3.11 5.14-3.11 1.96 0 3.19 1.07 4.8 1.07 1.56 0 2.52-1.08 4.78-1.08 1.66 0 3.42.91 4.69 2.48-4.13 2.27-3.46 8.23.52 9.99z" />
                            </svg>
                        )}
                        <span className="text-sm font-medium text-gray-700">
                            {socialLoading.apple ? 'Connecting...' : 'Sign in with Apple'}
                        </span>
                    </button>

                </div>

                <div className="text-center mt-4">

                    <p class="font-outfit font-normal text-[18px] leading-[100%] text-[#505256] text-center">Already have an account ?  <a href="/login" class="font-outfit underline font-normal text-[18px] leading-[100%] text-[#252C46]">Log in</a></p>

                </div>

            </div>

        </div>

    );

};



export default Signup;