import React,{ useState } from 'react';
import seam from '/seam.png';

const SignupForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log('Form Data:', formData); 

    
    try {
      const response = await fetch('http://localhost:8080/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result); 
      } else {
        console.error('Error:', response.statusText); 
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xs">
      <div className="flex flex-col items-center mb-6">
          <img src={seam} alt="Seam" className="h-12 sm:h-14 mb-4" />
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-600">Sign Up</h2>
          {/*<p className="text-gray-600 text-sm">Use default credentials: <strong>test@appseed.us</strong> / <strong>pass</strong></p>*/}
        </div>
        <p className="text-center text-gray-500 mb-4">Enter your credentials to continue</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-3 relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-2 text-gray-600"
            >
              {passwordVisible ? '🙈' : '👁️'}
            </button>
          </div>
          <div className="flex items-center mb-3">
            <input
              type="checkbox"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label className="ml-2 text-gray-900 text-sm">
              Agree with <a href="#" className="text-purple-600 underline">Terms</a>.
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Sign UP
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="#" className="text-gray-600 underline text-sm">Login</a>
        </div>
        <div className="text-center mt-3 text-gray-500 text-xs">
          Open-source Full-stack Seed Project <a href="#" className="text-purple-600 underline">See Product</a>.
        </div>
      </div>
    </div>
  );
};

export default SignupForm;