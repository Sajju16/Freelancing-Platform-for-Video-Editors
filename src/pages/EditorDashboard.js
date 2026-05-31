import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, TrendingUp, DollarSign, Briefcase, Clock, Award, MessageSquare } from 'lucide-react';

const mockEditorProjects = [
  { 
    id: 1, 
    title: "Tech Startup Explainer", 
    client: "TechCorp Inc", 
    status: "Completed", 
    rating: 5, 
    review: "Excellent work! Very professional and delivered ahead of schedule.", 
    date: "2024-12-12", 
    earnings: "$600",
    duration: "3 days",
    feedback: "Great communication throughout the project"
  },
  { 
    id: 2, 
    title: "Instagram Reels Package", 
    client: "FashionBrand", 
    status: "In Progress", 
    rating: null, 
    review: null, 
    date: "2024-12-22", 
    earnings: "$450",
    duration: "5 days",
    progress: 60
  },
  { 
    id: 3, 
    title: "Podcast Intro/Outro", 
    client: "MediaHub", 
    status: "Completed", 
    rating: 4.8, 
    review: "Great quality and quick turnaround!", 
    date: "2024-12-08", 
    earnings: "$300",
    duration: "2 days",
    feedback: "Would definitely hire again"
  },
  { 
    id: 4, 
    title: "Product Demo Video", 
    client: "E-commerce Pro", 
    status: "In Review", 
    rating: null, 
    review: null, 
    date: "2024-12-20", 
    earnings: "$550",
    duration: "4 days",
    progress: 100
  },
  { 
    id: 5, 
    title: "Wedding Highlight Reel", 
    client: "Sarah & John", 
    status: "Completed", 
    rating: 5, 
    review: "Absolutely beautiful! Captured every moment perfectly.", 
    date: "2024-12-05", 
    earnings: "$850",
    duration: "6 days",
    feedback: "Exceeded all expectations"
  }
];

const mockReviews = [
  { id: 1, client: "TechCorp Inc", rating: 5, comment: "Outstanding work! Professional and creative.", date: "2024-12-12", project: "Tech Startup Explainer" },
  { id: 2, client: "MediaHub", rating: 4.8, comment: "Great quality and quick turnaround!", date: "2024-12-08", project: "Podcast Intro" },
  { id: 3, client: "Sarah & John", rating: 5, comment: "Absolutely beautiful! Captured every moment perfectly.", date: "2024-12-05", project: "Wedding Video" },
  { id: 4, client: "Marketing Agency", rating: 4.9, comment: "Excellent attention to detail.", date: "2024-11-28", project: "Brand Video" }
];

const EditorDashboard = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' or 'reviews'

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'In Progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'In Review': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const completedProjects = mockEditorProjects.filter(p => p.status === 'Completed').length;
  const totalEarnings = mockEditorProjects.reduce((sum, p) => sum + parseInt(p.earnings.replace('$', '')), 0);
  const avgRating = (mockReviews.reduce((sum, r) => sum + r.rating, 0) / mockReviews.length).toFixed(1);

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Editor Dashboard</h1>
          <p className="text-gray-400">Track your projects and performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Briefcase className="text-blue-400" size={24} />
              </div>
              <TrendingUp className="text-blue-400" size={20} />
            </div>
            <p className="text-gray-400 text-sm mb-1">Total Projects</p>
            <p className="text-3xl font-bold text-white mb-1">{mockEditorProjects.length}</p>
            <p className="text-sm text-blue-400">+2 this month</p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <DollarSign className="text-green-400" size={24} />
              </div>
              <TrendingUp className="text-green-400" size={20} />
            </div>
            <p className="text-gray-400 text-sm mb-1">Total Earnings</p>
            <p className="text-3xl font-bold text-white mb-1">${totalEarnings}</p>
            <p className="text-sm text-green-400">This month: $1,400</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <Star className="text-yellow-400" size={24} />
              </div>
              <Award className="text-yellow-400" size={20} />
            </div>
            <p className="text-gray-400 text-sm mb-1">Average Rating</p>
            <p className="text-3xl font-bold text-white mb-1">{avgRating}</p>
            <p className="text-sm text-yellow-400">{mockReviews.length} reviews</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Clock className="text-purple-400" size={24} />
              </div>
              <TrendingUp className="text-purple-400" size={20} />
            </div>
            <p className="text-gray-400 text-sm mb-1">Completed</p>
            <p className="text-3xl font-bold text-white mb-1">{completedProjects}</p>
            <p className="text-sm text-purple-400">100% on time</p>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Monthly Performance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">12</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">$3,200</div>
              <div className="text-sm text-gray-400">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">4.9</div>
              <div className="text-sm text-gray-400">Avg Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">24h</div>
              <div className="text-sm text-gray-400">Avg Response Time</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6 border-b border-gray-700">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 font-semibold transition relative ${
              activeTab === 'projects'
                ? 'text-blue-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Recent Projects
            {activeTab === 'projects' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-6 py-3 font-semibold transition relative ${
              activeTab === 'reviews'
                ? 'text-blue-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Reviews & Ratings
            {activeTab === 'reviews' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"></div>
            )}
          </button>
        </div>

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-4">
            {mockEditorProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500 transition-all"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="text-gray-400">Client: <span className="text-white">{project.client}</span></span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-400">Duration: <span className="text-white">{project.duration}</span></span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-400">{project.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <span className="text-2xl font-bold text-green-400">{project.earnings}</span>
                    </div>
                  </div>

                  {project.status === 'In Progress' && project.progress && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-blue-400 font-semibold">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {project.rating && (
                    <div className="flex items-center mb-4 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                      <Star size={20} className="text-yellow-400 fill-yellow-400 mr-2" />
                      <span className="text-yellow-400 font-semibold text-lg mr-3">{project.rating}</span>
                      <p className="text-gray-300 italic">"{project.review}"</p>
                    </div>
                  )}

                  <button
                    onClick={() => toggleProject(project.id)}
                    className="w-full flex items-center justify-center py-2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition"
                  >
                    {expandedProject === project.id ? (
                      <>Less Details <ChevronUp size={18} className="ml-2" /></>
                    ) : (
                      <>More Details <ChevronDown size={18} className="ml-2" /></>
                    )}
                  </button>
                </div>

                {expandedProject === project.id && (
                  <div className="px-6 pb-6 border-t border-gray-700 pt-4 animate-fadeIn">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center">
                          <Briefcase size={18} className="mr-2 text-blue-400" />
                          Project Details
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Client:</span>
                            <span className="text-white">{project.client}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Status:</span>
                            <span className="text-white">{project.status}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Duration:</span>
                            <span className="text-white">{project.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Completed:</span>
                            <span className="text-white">{project.date}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center">
                          <MessageSquare size={18} className="mr-2 text-purple-400" />
                          Client Feedback
                        </h4>
                        {project.feedback ? (
                          <div className="bg-gray-900/50 p-4 rounded-lg">
                            <p className="text-gray-300 text-sm italic">"{project.feedback}"</p>
                            {project.rating && (
                              <div className="flex items-center mt-3">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    size={16} 
                                    className={`${i < Math.floor(project.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <p className="text-gray-500 text-sm italic">Awaiting client feedback...</p>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-3 mt-4">
                      <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium">
                        View Files
                      </button>
                      <button className="flex-1 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition font-medium">
                        Message Client
                      </button>
                      {project.status === 'Completed' && (
                        <button className="flex-1 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium">
                          Download Invoice
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <div className="text-5xl font-bold text-white mb-2">{avgRating}</div>
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={24} 
                        className={`${i < Math.floor(avgRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-400">Based on {mockReviews.length} reviews</p>
                </div>

                <div className="w-full md:w-1/2 space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => {
                    const count = mockReviews.filter(r => Math.floor(r.rating) === stars).length;
                    const percentage = (count / mockReviews.length) * 100;
                    return (
                      <div key={stars} className="flex items-center gap-3">
                        <span className="text-sm text-gray-400 w-12">{stars} star</span>
                        <div className="flex-1 bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-yellow-400 h-2 rounded-full transition-all"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-400 w-8">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {mockReviews.map((review) => (
                <div 
                  key={review.id} 
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {review.client.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{review.client}</h4>
                        <p className="text-sm text-gray-400">{review.project}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Star size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
                        <span className="text-white font-semibold">{review.rating}</span>
                      </div>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditorDashboard;