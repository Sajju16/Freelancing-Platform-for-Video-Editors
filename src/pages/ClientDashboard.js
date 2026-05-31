import React, { useState, useEffect } from 'react';
import { Star, ChevronDown, ChevronUp, Upload, X, Search, Filter } from 'lucide-react';

const mockEditors = [
  { id: 1, name: "Alex Turner", rating: 4.9, software: "Premiere Pro, After Effects", experience: "5 years", projects: 127, avatar: "AT", specialty: "Corporate Videos", rate: "$50/hr" },
  { id: 2, name: "Sarah Chen", rating: 4.8, software: "Final Cut Pro, DaVinci", experience: "4 years", projects: 98, avatar: "SC", specialty: "Weddings", rate: "$45/hr" },
  { id: 3, name: "Mike Johnson", rating: 4.7, software: "Premiere Pro, Photoshop", experience: "6 years", projects: 156, avatar: "MJ", specialty: "Social Media", rate: "$55/hr" },
  { id: 4, name: "Emma Davis", rating: 4.9, software: "After Effects, Cinema 4D", experience: "3 years", projects: 89, avatar: "ED", specialty: "Motion Graphics", rate: "$60/hr" },
  { id: 5, name: "James Wilson", rating: 4.6, software: "Premiere Pro, Audition", experience: "7 years", projects: 203, avatar: "JW", specialty: "Podcasts", rate: "$40/hr" },
  { id: 6, name: "Lisa Anderson", rating: 4.8, software: "DaVinci Resolve, Photoshop", experience: "5 years", projects: 145, avatar: "LA", specialty: "Color Grading", rate: "$65/hr" }
];

const mockProjects = [
  { id: 1, title: "Corporate Promo Video", editor: "Alex Turner", status: "Completed", date: "2024-12-15", price: "$500", duration: "3 days" },
  { id: 2, title: "YouTube Intro Animation", editor: "Sarah Chen", status: "In Progress", date: "2024-12-20", price: "$200", duration: "2 days" },
  { id: 3, title: "Wedding Highlight Reel", editor: "Mike Johnson", status: "Completed", date: "2024-12-10", price: "$800", duration: "5 days" },
  { id: 4, title: "Product Demo", editor: "Emma Davis", status: "In Review", date: "2024-12-18", price: "$350", duration: "2 days" },
  { id: 5, title: "Social Media Package", editor: "James Wilson", status: "Completed", date: "2024-12-05", price: "$600", duration: "4 days" }
];

const ClientDashboard = () => {
  const [expandedEditor, setExpandedEditor] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRating, setFilterRating] = useState('all');

  const toggleEditor = (id) => {
    setExpandedEditor(expandedEditor === id ? null : id);
  };

  const filteredEditors = mockEditors.filter(editor => {
    const matchesSearch = editor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         editor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = filterRating === 'all' || editor.rating >= parseFloat(filterRating);
    return matchesSearch && matchesRating;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'In Progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'In Review': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Client Dashboard</h1>
          <p className="text-gray-400">Manage your projects and find talented editors</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm">Total Projects</p>
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Upload className="text-blue-400" size={20} />
              </div>
            </div>
            <p className="text-3xl font-bold text-white">{mockProjects.length}</p>
            <p className="text-sm text-green-400 mt-1">+2 this month</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm">In Progress</p>
              <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <Star className="text-yellow-400" size={20} />
              </div>
            </div>
            <p className="text-3xl font-bold text-white">1</p>
            <p className="text-sm text-gray-400 mt-1">Active now</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm">Completed</p>
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Star className="text-green-400" size={20} />
              </div>
            </div>
            <p className="text-3xl font-bold text-white">3</p>
            <p className="text-sm text-green-400 mt-1">100% success</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm">Total Spent</p>
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Star className="text-purple-400" size={20} />
              </div>
            </div>
            <p className="text-3xl font-bold text-white">$2,450</p>
            <p className="text-sm text-gray-400 mt-1">All time</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button 
            onClick={() => setShowUploadModal(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center"
          >
            <Upload size={20} className="mr-2" />
            Upload New Project
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold border border-gray-700 hover:border-blue-500 transition-all">
            Request Quote
          </button>
        </div>

        {/* Browse Editors Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold text-white">Browse Editors</h2>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search editors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
              </div>
              <select
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Ratings</option>
                <option value="4.8">4.8+ Stars</option>
                <option value="4.5">4.5+ Stars</option>
                <option value="4.0">4.0+ Stars</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredEditors.map((editor) => (
              <div 
                key={editor.id} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500 transition-all"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                        {editor.avatar}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{editor.name}</h3>
                        <p className="text-sm text-gray-400">{editor.specialty}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Star size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
                        <span className="text-white font-semibold">{editor.rating}</span>
                      </div>
                      <p className="text-sm text-gray-400">{editor.projects} projects</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Software:</span>
                      <span className="text-white">{editor.software}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Experience:</span>
                      <span className="text-white">{editor.experience}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Rate:</span>
                      <span className="text-green-400 font-semibold">{editor.rate}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleEditor(editor.id)}
                    className="w-full flex items-center justify-center py-2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition"
                  >
                    {expandedEditor === editor.id ? (
                      <>Less Info <ChevronUp size={18} className="ml-2" /></>
                    ) : (
                      <>More Info <ChevronDown size={18} className="ml-2" /></>
                    )}
                  </button>
                </div>

                {expandedEditor === editor.id && (
                  <div className="px-6 pb-6 border-t border-gray-700 pt-4 space-y-4 animate-fadeIn">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Portfolio Highlights</h4>
                      <ul className="space-y-1 text-sm text-gray-400">
                        <li>• Award-winning corporate videos</li>
                        <li>• Specialized in {editor.specialty.toLowerCase()}</li>
                        <li>• Fast turnaround time (24-48 hours)</li>
                      </ul>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium">
                        Hire Now
                      </button>
                      <button className="flex-1 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition font-medium">
                        Message
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Project History Table */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Project History</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Project</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Editor</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {mockProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-700/30 transition">
                      <td className="px-6 py-4">
                        <div className="text-white font-medium">{project.title}</div>
                        <div className="text-sm text-gray-400">{project.duration}</div>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{project.editor}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{project.date}</td>
                      <td className="px-6 py-4 text-green-400 font-semibold">{project.price}</td>
                      <td className="px-6 py-4">
                        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <UploadModal onClose={() => setShowUploadModal(false)} />
      )}
    </div>
  );
};

// Upload Modal Component
const UploadModal = ({ onClose }) => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [projectDetails, setProjectDetails] = useState({
    title: '',
    description: '',
    deadline: '',
    budget: ''
  });

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle upload logic here
    alert('Project uploaded successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl w-full border border-gray-700 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-white">Upload New Project</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Upload Area */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-8 text-center transition ${
              dragActive ? 'border-blue-500 bg-blue-500/10' : 'border-gray-600 hover:border-gray-500'
            }`}
          >
            <input
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              className="hidden"
              accept="video/*,.zip,.rar"
            />
            <Upload className="mx-auto mb-4 text-gray-400" size={48} />
            {file ? (
              <div>
                <p className="text-white font-semibold mb-2">{file.name}</p>
                <p className="text-gray-400 text-sm">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                <button
                  type="button"
                  onClick={() => setFile(null)}
                  className="mt-3 text-red-400 hover:text-red-300 text-sm"
                >
                  Remove file
                </button>
              </div>
            ) : (
              <div>
                <p className="text-white mb-2">Drag and drop your files here</p>
                <p className="text-gray-400 text-sm mb-4">or</p>
                <label
                  htmlFor="fileInput"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer inline-block transition"
                >
                  Browse Files
                </label>
                <p className="text-gray-500 text-xs mt-3">Supports: MP4, MOV, ZIP, RAR (Max 500MB)</p>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Project Title</label>
            <input
              type="text"
              value={projectDetails.title}
              onChange={(e) => setProjectDetails({...projectDetails, title: e.target.value})}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              placeholder="e.g., Wedding Highlight Video"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
            <textarea
              value={projectDetails.description}
              onChange={(e) => setProjectDetails({...projectDetails, description: e.target.value})}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 h-24 resize-none"
              placeholder="Describe your project requirements..."
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Deadline</label>
              <input
                type="date"
                value={projectDetails.deadline}
                onChange={(e) => setProjectDetails({...projectDetails, deadline: e.target.value})}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Budget ($)</label>
              <input
                type="number"
                value={projectDetails.budget}
                onChange={(e) => setProjectDetails({...projectDetails, budget: e.target.value})}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="500"
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Upload Project
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientDashboard;