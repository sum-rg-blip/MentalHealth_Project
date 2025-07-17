
import React, { useEffect, useRef, useState } from 'react'; 
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { MdVideocam, MdCall, MdSchedule, MdSecurity } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Appointment() {
  const location = useLocation();
  const navigate = useNavigate();
  const inputFocus = useRef(null);

  const { type: selectedService = '', counselingType = '' } = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    PhoneNumber: '',
    Email: '',
    password: '',
    gender: '',
    contactMethod: '',
    date: '',
    service: selectedService,
    counselingType: counselingType,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    inputFocus.current?.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.PhoneNumber.trim()) newErrors.PhoneNumber = 'Phone number is required';
    if (!formData.Email.trim()) newErrors.Email = 'Email is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.contactMethod) newErrors.contactMethod = 'Contact method is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.service) newErrors.service = 'Service is required';
    if (!formData.counselingType) newErrors.counselingType = 'Counseling type is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await axios.post('http://localhost:5000/register/create', {
        fullname: formData.name,
        phonenumber: formData.PhoneNumber,
        email: formData.Email,
        password: formData.password,
        gender: formData.gender,
        type: formData.contactMethod === 'call' ? 'phonecall' : 'videocall',
        date: formData.date,
        service: formData.service,
        counselingType: formData.counselingType,
      });
      alert('Appointment booked successfully!');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Server error, please try again later.');
    }
  };

  const renderIcon = (field) => {
    if (!formData[field]) return null;
    const errorMsg = errors[field];
    return (
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        {errorMsg ? (
          <AiFillCloseCircle className="text-red-500 text-xl animate-shake" title={errorMsg} />
        ) : (
          <AiFillCheckCircle className="text-green-500 text-xl animate-pulseSlow" />
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <motion.div
        className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row max-w-6xl w-full overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="md:w-1/2 bg-green-700 text-white flex flex-col justify-center p-12 space-y-8">
          <h1 className="text-4xl font-extrabold leading-tight">
            Welcome to Your Path <br /> To Wellness
          </h1>
          <p className="text-green-200 text-lg max-w-md">
            Take a moment to prioritize your mental health. Our compassionate therapists are here to help you thrive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-4 bg-green-600 p-4 rounded-xl shadow-md w-56">
              <MdCall className="text-4xl" />
              <div>
                <h4 className="font-semibold">Easy Contact</h4>
                <p className="text-green-200 text-sm">Schedule via call or video</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-green-600 p-4 rounded-xl shadow-md w-56">
              <MdSchedule className="text-4xl" />
              <div>
                <h4 className="font-semibold">Flexible Timing</h4>
                <p className="text-green-200 text-sm">Appointments that fit your schedule</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-green-600 p-4 rounded-xl shadow-md w-56">
              <MdSecurity className="text-4xl" />
              <div>
                <h4 className="font-semibold">Confidential</h4>
                <p className="text-green-200 text-sm">Your privacy is our priority</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 text-black p-8 md:p-12 relative">
          <Link to="/service" className="text-green-700 hover:underline font-semibold inline-block mb-6">
            ← Back to Services
          </Link>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                ref={inputFocus}
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring focus:border-green-400"
              />
              {renderIcon('name')}
            </div>

            <div className="relative">
              <input
                type="tel"
                name="PhoneNumber"
                placeholder="Phone Number"
                value={formData.PhoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring focus:border-green-400"
              />
              {renderIcon('PhoneNumber')}
            </div>

            <div className="relative">
              <input
                type="email"
                name="Email"
                placeholder="Email"
                value={formData.Email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring focus:border-green-400"
              />
              {renderIcon('Email')}
            </div>

            <div className="relative">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring focus:border-green-400"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-10 top-4 cursor-pointer text-gray-600"
                  title={showPassword ? 'Hide Password' : 'Show Password'}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {renderIcon('password')}
            </div>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  className="cursor-pointer"
                />
                Male
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  className="cursor-pointer"
                />
                Female
              </label>
            </div>
            {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}

            <div className="flex gap-8">
              <label className={`flex items-center gap-2 cursor-pointer select-none ${formData.contactMethod === 'call' ? 'text-green-700 font-semibold' : ''}`}>
                <input
                  type="radio"
                  name="contactMethod"
                  value="call"
                  checked={formData.contactMethod === 'call'}
                  onChange={handleChange}
                  className="cursor-pointer"
                />
                <MdCall className="text-2xl" />
                Phone Call
              </label>

              <label className={`flex items-center gap-2 cursor-pointer select-none ${formData.contactMethod === 'video' ? 'text-green-700 font-semibold' : ''}`}>
                <input
                  type="radio"
                  name="contactMethod"
                  value="video"
                  checked={formData.contactMethod === 'video'}
                  onChange={handleChange}
                  className="cursor-pointer"
                />
                <MdVideocam className="text-2xl" />
                Video Call
              </label>
            </div>
            {errors.contactMethod && <p className="text-sm text-red-500">{errors.contactMethod}</p>}

            <div className="relative">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-8 py-3 text-black rounded-lg border focus:outline-none focus:ring focus:border-green-400"
              />
              {renderIcon('date')}
            </div>

            <input
              name="service"
              readOnly
              value={formData.service}
              className="w-full px-6 py-3 border rounded-lg bg-gray-100"
            />

            {formData.counselingType ? (
              <input
                name="counselingType"
                readOnly
                value={formData.counselingType}
                className="w-full px-4 py-3 border rounded-lg bg-gray-100"
              />
            ) : (
              <select
                name="counselingType"
                value={formData.counselingType}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
              >
                <option value="">Select Counseling Type</option>
                {["Individual Therapy", "Couples Counseling", "Group Therapy", "Child & Adolescent Therapy", "Trauma Counseling", "Crisis Intervention"].map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            )}

            <motion.button
              type="submit"
              className="w-full py-3 rounded-lg bg-green-700 text-white font-bold hover:bg-green-800 transition"
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
