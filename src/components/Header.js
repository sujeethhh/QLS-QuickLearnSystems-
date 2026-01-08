"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { ChevronRight, ChevronDown, Menu, X, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Headers({ onGetStartedClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState(null);
  const [openMobileSubSection, setOpenMobileSubSection] = useState(null);
  const [openMobileSubSubSection, setOpenMobileSubSubSection] = useState(null);
  const [openMobilePracticeManager, setOpenMobilePracticeManager] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileSection(null);
    setOpenMobileSubSection(null);
    setOpenMobileSubSubSection(null);
    setOpenMobilePracticeManager(null);
  };

  const toggleMobileSection = (section) => {
    setOpenMobileSection(openMobileSection === section ? null : section);
    setOpenMobileSubSection(null);
    setOpenMobileSubSubSection(null);
    setOpenMobilePracticeManager(null);
  };

  const toggleMobileSubSection = (subSection) => {
    setOpenMobileSubSection(openMobileSubSection === subSection ? null : subSection);
    setOpenMobileSubSubSection(null);
    setOpenMobilePracticeManager(null);
  };

  const toggleMobileSubSubSection = (subSubSection) => {
    setOpenMobileSubSubSection(openMobileSubSubSection === subSubSection ? null : subSubSection);
    setOpenMobilePracticeManager(null);
  };

  const toggleMobilePracticeManager = (section) => {
    setOpenMobilePracticeManager(openMobilePracticeManager === section ? null : section);
  };

  return (
    <>
      {/* Animated Professional Top Bar */}
      <div className="hidden lg:block bg-[#4C0519] border-b border-[#CBD5E1]/40
animate-in slide-in-from-top-2 duration-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-6">
          <div className="flex items-center space-x-8 text-sm text-white">
            <span className="flex items-center gap-2.5 hover:text-blue-200 transition-all duration-300 cursor-pointer hover:scale-105 group bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 hover:shadow-sm">
              <span className="w-4 h-4 text-white group-hover:animate-bounce">�</span>
              <span className="font-medium">+111 (564) 568 25</span>
            </span>
            <span className="flex items-center gap-2.5 hover:text-blue-200 transition-all duration-300 cursor-pointer hover:scale-105 group bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20 hover:shadow-sm">
              <span className="w-4 h-4 text-white group-hover:animate-bounce">✉️</span>
              <span className="font-medium">info@quicklearn.com</span>
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-full">

              <span className="text-xs text-white font-medium">Follow:</span>
              <a
                href="https://www.facebook.com/quicklearnsystems#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF href="https://x.com/quicklearnsys" className="w-3.5 h-3.5 text-white hover:text-blue-200 transition-all duration-300 cursor-pointer hover:scale-125 hover:-translate-y-1" />
              </a>
              <a
                href="https://x.com/quicklearnsys"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="w-3.5 h-3.5 text-white hover:text-blue-200 transition-all duration-300 cursor-pointer hover:scale-125 hover:-translate-y-1" />
              </a>
              <a
                href="https://www.linkedin.com/in/quicklearn-systems-1494ba12a/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="w-3.5 h-3.5 text-white hover:text-blue-200 transition-all duration-300 cursor-pointer hover:scale-125 hover:-translate-y-1" />
              </a>
              <a
                href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html"
                target="_blank"
                rel="noopener noreferrer"
              >


                <FaYoutube className="w-3.5 h-3.5 text-white hover:text-red-300 transition-all duration-300 cursor-pointer hover:scale-125 hover:-translate-y-1" />

              </a>
            </div>

            <div className="h-5 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse"></div>

          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-100 backdrop-blur-sm bg-white/95 animate-in slide-in-from-top-4 duration-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-10">
          <Link href="/" className="flex items-center space-x-4 group transition-transform duration-300 hover:scale-105">
            {/* QuickLearn Logo */}
            <div className="relative h-20 flex items-center transition-transform duration-300 group-hover:scale-110">
  <Image
    src="/LOGO.png"
    alt="QuickLearn Systems Logo"
    width={500}
    height={240}
    className="object-contain h-25 w-auto"
    priority
  />
</div>

            <div className="flex flex-col leading-tight">
            {/* QuickLearn Text - Professional */}
            <span className="text-2xl sm:text-2xl md:text-3xl font-semibold text-slate-800 tracking-tight transition-all duration-300 group-hover:text-[#7A1E2D]
">
              QuickLearn Systems
            </span>
            <span className="text-xs sm:text-sm text-slate-1000 tracking-wide">
                Learn. Certify. Excel
            </span>
            </div>
            {/* Clean Underline Effect */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 group-hover:text-[#7A1E2D]
 opacity-0 group-hover:opacity-100"
              initial={{ width: 0 }}
              whileHover={{
                width: "100%",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-medium text-slate-1000 text-sm relative">
            <Link href="/" className="group-hover:text-[#7A1E2D] transition-all duration-300 py-2 px-1 relative group hover:scale-105">
              <span className="relative z-10">Home</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7A1E2D] transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link href="/about" className="hover:text-[#7A1E2D] transition-all duration-300 py-2 px-1 relative group hover:scale-105">
              <span className="relative z-10">About</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7A1E2D] transition-all duration-300 group-hover:w-full"></div>
            </Link>

            <div className="relative group">
              {/* Main COURSES Dropdown */}
              <button className="flex items-center hover:text-[#7A1E2D] transition-all duration-300 py-2 px-1 relative hover:scale-105">
                <span className="pr-2 relative z-10">Courses</span>
                <ChevronDown className="w-4 h-4 transition-all duration-500 group-hover:rotate-180 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7A1E2D] transition-all duration-300 group-hover:w-full"></div>
              </button>

              {/* Dropdown Content */}
              <div className="absolute right-2 mt-1 w-64 bg-white shadow-xl rounded-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 backdrop-blur-sm transform scale-95 group-hover:scale-100 group-hover:translate-y-1">
                <ul className="flex flex-col text-gray-700">

                  {/* IT Service Management */}
                  <li className="relative group/item">
                    <div

                      className="flex justify-between items-center px-4 py-2 hover:bg-[#9F2D2D] hover:text-white"
                    >
                      <span>IT Service Management</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    {/* Submenu */}
                    <ul className="absolute left-full top-0 w-72 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300">
                      <li className="px-4 py-2 font-semibold">ITIL®</li>
                      <li className="relative group/subitem">
                        <Link href="/ITL4Management" className="flex justify-between items-center px-6 py-2 hover:bg-[#9F2D2D] hover:text-white cursor-pointer">
                          <span>ITIL® 4 Foundation</span>
                        </Link>
                      </li>
                      <li className="relative group/subitem">
                        <div className="flex justify-between items-center px-6 py-2 hover:bg-[#9F2D2D] hover:text-white cursor-pointer">
                          <span>ITIL® 4 Practice Manager</span>
                          <ChevronLeft className="w-4 h-4 rotate-180" />
                        </div>

                        {/* Sub-submenu for ITIL Practice Manager */}
                        <ul className="absolute left-full top-0 w-80 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/subitem:opacity-100 group-hover/subitem:visible transition-all duration-300 border border-gray-100 z-50">
                          <li className="px-4 py-2 font-semibold text-gray-800 border-b border-gray-100 bg-red-50">
                            Practice Manager Modules
                          </li>

                          <li className="relative group/msf">
                            <div className="flex justify-between items-center px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">
                              <span>MSF - Monitor, Support & Fulfil</span>
                              <ChevronLeft className="w-4 h-4 rotate-180" />
                            </div>

                            {/* MSF detailed submenu */}
                            <ul className="absolute left-full top-0 w-72 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/msf:opacity-100 group-hover/msf:visible transition-all duration-300 border border-gray-100 z-50">
                              <li className="px-4 py-2 font-semibold text-gray-800 border-b border-gray-100 bg-blue-100">
                                MSF Components
                              </li>
                              <li><Link href="/ServiceDesk" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">Service Desk</Link></li>
                              <li><Link href="/IncidentManagement" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">Incident Management</Link></li>
                              <li><Link href="/ProblemManagement" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">Problem Management</Link></li>
                              <li><Link href="/ServiceRequestManagement" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">Service Request Management</Link></li>
                              <li><Link href="/MonitoringEventManagement" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">Monitoring & Event Management</Link></li>
                            </ul>
                          </li>

                          <li className="relative group/pic">
                            <div className="flex justify-between items-center px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">
                              <span>PIC - Plan, Implement & Control</span>
                              <ChevronLeft className="w-4 h-4 rotate-180" />
                            </div>

                            {/* PIC detailed submenu */}
                            <ul className="absolute left-full top-0 w-72 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/pic:opacity-100 group-hover/pic:visible transition-all duration-300 border border-gray-100 z-50">
                              <li className="px-4 py-2 font-semibold text-gray-800 border-b border-gray-250 bg-green-200">
                                PIC Components
                              </li>
                              <li><Link href="/ChangeEnablement" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">Change Enablement</Link></li>
                              <li><Link href="/ReleaseManagement" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">Release Management</Link></li>
                              <li><Link href="/ServiceConfiguration" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">Service Configuration Management</Link></li>
                              <li><Link href="/DeploymentManagement" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">Deployment Management</Link></li>
                              <li><Link href="/ItAssetManage" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">IT Asset Management</Link></li>
                            </ul>
                          </li>

                          <li className="relative group/cai">
                            <div className="flex justify-between items-center px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">
                              <span>CAI - Collaborate, Assure & Improve</span>
                              <ChevronLeft className="w-4 h-4 rotate-180" />
                            </div>

                            {/* CAI detailed submenu - Fixed positioning */}
                            <ul className="absolute left-full top-0 w-72 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover/cai:opacity-100 group-hover/cai:visible transition-all duration-300 border border-slate-200 z-50 -ml-2">
                              <li className="px-4 py-2 font-semibold text-slate-800 border-b border-slate-200 bg-gradient-to-r from-purple-100 to-blue-100">
                                CAI Components
                              </li>
                              <li><Link href="/ContinuationImprovement" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm transition-colors duration-200">Continual Improvement</Link></li>
                              <li><Link href="/RelationshipManagement" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm transition-colors duration-200">Relationship Management</Link></li>
                              <li><Link href="/ServiceLevelManagement" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm transition-colors duration-200">Service Level Management</Link></li>
                              <li><Link href="/InformationSecurityMan" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm transition-colors duration-200">Information Security Management</Link></li>
                              <li><Link href="/SupplierManagement" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm transition-colors duration-200">Supplier Management</Link></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="relative group/managing">
                        <div className="flex justify-between items-center px-6 py-2 hover:bg-[#9F2D2D] hover:text-white cursor-pointer">
                          <span>ITIL® 4 Managing Professional</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>

                        {/* ITIL Managing Professional submenu */}
                        <ul className="absolute left-full top-0 w-80 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/managing:opacity-100 group-hover/managing:visible transition-all duration-300 border border-gray-100 z-50">
                          <li className="px-4 py-2 font-semibold text-gray-800 border-b border-gray-100 bg-yellow-50">
                            ITIL® 4 Managing Professional Modules
                          </li>
                          <li><Link href="/ITL4SCDS" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">ITIL® 4 Specialist Create, Deliver and Support</Link></li>
                          <li><Link href="/ITL4SDSV" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">ITIL® 4 Specialist Drive Stakeholder Value</Link></li>
                          <li><Link href="/ITL4SHVI" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">ITIL® 4 Specialist High Velocity IT</Link></li>
                          <li><Link href="/ITL4SDPI" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">ITIL® 4 Strategist Direct Plan & Improve</Link></li>
                        </ul>
                      </li>

                      <li className="relative group/specialist">
                        <div className="flex justify-between items-center px-6 py-2 hover:bg-[#9F2D2D] hover:text-white cursor-pointer">
                          <span>ITIL® 4 Specialist</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>

                        {/* ITIL Specialist submenu */}
                        <ul className="absolute left-full top-0 w-80 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/specialist:opacity-100 group-hover/specialist:visible transition-all duration-300 border border-gray-100 z-50">
                          <li className="px-4 py-2 font-semibold text-gray-800 border-b border-gray-100 bg-indigo-50">
                            ITIL® 4 Specialist Modules
                          </li>

                          <li><Link href="/AcquiringAndManagingCS" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">Acquiring And Managing Cloud Service</Link></li>
                          <li><Link href="/SustainabilityInDigitalAI" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">Sustainability In Digital and IT</Link></li>
                          <li><Link href="/BusinessRelationshipManage" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">Business Relationship Management</Link></li>
                          <li><Link href="/ItAssetManage" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">IT Asset Management</Link></li>
                          <li><Link href="/MonitorSupportFulfil" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">Monitor, Support and Fulfil</Link></li>
                        </ul>
                      </li>

                      <li className="relative group/strategist">
                        <div className="flex justify-between items-center px-6 py-2 hover:bg-[#9F2D2D] hover:text-white cursor-pointer">
                          <span>ITIL® 4 Strategist</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>

                        {/* ITIL Strategist submenu */}
                        <ul className="absolute left-full top-0 w-72 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/strategist:opacity-100 group-hover/strategist:visible transition-all duration-300 border border-gray-100 z-50">
                          <li className="px-4 py-2 font-semibold text-gray-800 border-b border-gray-100 bg-orange-50">
                            ITIL® 4 Strategist Modules
                          </li>
                          <li><Link href="/DigitalItService" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">Digital IT & Services</Link></li>
                        </ul>
                      </li>

                      <li className="relative group/siam">
                        <div className="flex justify-between items-center px-6 py-2 hover:bg-[#9F2D2D] hover:text-white cursor-pointer">
                          <span>SIAM</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>

                        {/* SIAM submenu */}
                        <ul className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/siam:opacity-100 group-hover/siam:visible transition-all duration-300 border border-gray-100 z-50">
                          <li className="px-4 py-2 font-semibold text-gray-800 border-b border-gray-100 bg-teal-50">
                            SIAM Modules
                          </li>
                          <li><Link href="/SIAMFoundation" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">SIAM Foundation</Link></li>
                          <li><Link href="/SIAMProfessional" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white text-sm">SIAM Professional</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  {/* Project & Program Management */}
                  <li className="relative group/item">
                    <div

                      className="flex justify-between items-center px-4 py-2 hover:bg-[#9F2D2D] hover:text-white"
                    >
                      <span>Project & Program Management</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    {/* Submenu */}
                    <ul className="absolute left-full top-0 w-72 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300">
                      <li><Link href="/PMP" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">PMP</Link></li>
                      <li><Link href="/ACP" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">ACP</Link></li>
                      <li><Link href="/Prince2Foundation" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">Prince2 Foundation</Link></li>
                      <li><Link href="/Prince2Practitioner" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">Prince2 Practitioner</Link></li>
                      <li><Link href="/Prince2AgileFoundation" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">Prince2 Agile Foundation</Link></li>
                      <li><Link href="/Prince2AgilePractitioner" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">Prince2 Agile Practitioner</Link></li>
                      <li><Link href="/MSPFoundation" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">MSP Foundation</Link></li>
                      <li><Link href="/MSPPractitioner" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">MSP Practitioner</Link></li>
                    </ul>
                  </li>

                  {/* Agile, Scrum & Kanban */}
                  <li className="relative group/item">
                    <div

                      className="flex justify-between items-center px-4 py-2 hover:bg-[#9F2D2D] hover:text-white"
                    >
                      <span>Agile, Scrum & Kanban</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <ul className="absolute left-full top-0 w-80 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300">
                      <li><Link href="/LeadingSAFeAgilist" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">Leading SAFe Agilist</Link></li>
                      <li><Link href="/SAFePO-PM" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">SAFe PO/PM</Link></li>
                      <li><Link href="/SAFeforTeams" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">SAFe for Teams</Link></li>
                      <li><Link href="/SAFeScrumMaster" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">SAFe Scrum Master</Link></li>
                      <li><Link href="/SAFeAdvancedScrumMaster" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">SAFe Advanced Scrum Master</Link></li>
                      <li><Link href="/PScrumM1" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">Professional Scrum Master I (PSM I)</Link></li>
                      <li><Link href="/PScrumM2" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">Professional Scrum Master II (PSM II)</Link></li>
                      <li><Link href="/PSPO1" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">Professional Scrum Product Owner I (PSPO I)</Link></li>
                      <li><Link href="/PSPO2" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">Professional Scrum Product Owner II (PSPO II)</Link></li>
                      <li><Link href="/PSK1" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">Professional Scrum with Kanban (PSK I)</Link></li>
                      <li><Link href="/CSM" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">Certified Scrum Master</Link></li>
                      <li><Link href="/CASM" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">Certified Advanced Scrum Master</Link></li>
                      <li><Link href="/CSPO" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">Certified Scrum Product Owner</Link></li>
                      <li><Link href="/ICP-ACC" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">ICP-ACC</Link></li>
                    </ul>
                  </li>

                  {/* Quality Management */}
                  <li className="relative group/item">
                    <div

                      className="flex justify-between items-center px-4 py-2 hover:bg-[#9F2D2D] hover:text-white"
                    >
                      <span>Quality Management</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <ul className="absolute left-full top-0 w-72 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300">
                      <li><Link href="/LeanSSGB" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">Lean Six Sigma Green Belt</Link></li>
                      <li><Link href="/LeanSSBB" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">Lean Six Sigma Black Belt</Link></li>
                    </ul>
                  </li>

                  {/* DevOps & Business Analysis */}
                  <li className="relative group/item">
                    <div

                      className="flex justify-between items-center px-4 py-2 hover:bg-[#9F2D2D] hover:text-white"
                    >
                      <span>DevOps & Business Analysis</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <ul className="absolute left-full top-0 w-80 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300">
                      <li><Link href="/SREFoundation" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">SRE Foundation</Link></li>
                      <li><Link href="/SREPractitioner" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">SRE Practitioner</Link></li>
                      <li><Link href="/DevopsFoundation" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">DevOps Foundation</Link></li>
                      <li><Link href="/DevopsMaster" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">DevOps Master</Link></li>
                      <li><Link href="/BusinessAnalysisF" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">Business Analysis Foundation</Link></li>
                      <li><Link href="/BusinessAnalysisP" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">Business Analysis Practice</Link></li>
                      <li><Link href="/AgileBA" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">Agile Business Analysis</Link></li>
                    </ul>
                  </li>

                  {/* Software Testing, Technical & Other Courses */}
                  <li className="relative group/item">
                    <div

                      className="flex justify-between items-center px-4 py-2 hover:bg-[#9F2D2D] hover:text-white"
                    >
                      <span>Software Testing, Technical & Other Courses</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <ul className="absolute left-full top-0 w-72 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300">
                      <li><Link href="/ISTQBF" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">ISTQB Foundation</Link></li>
                      <li><Link href="/ISTQBA" className="block px-6 py-2 hover:bg-[#9F2D2D] hover:text-white">ISTQB Advanced</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/Events" className="hover:text-[#9F2D2D] transition-all duration-300 py-2 px-1 relative group hover:scale-105">
              <span className="relative z-10">Events</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9F2D2D] transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link href="/CorporateTraining" className="hover:text-[#9F2D2D] transition-all duration-300 py-2 px-1 relative group hover:scale-105">
              <span className="relative z-10">Corporate Training</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9F2D2D] transition-all duration-300 group-hover:w-full"></div>
            </Link>
            <Link href="/Contact" className="hover:text-[#9F2D2D] transition-all duration-300 py-2 px-1 relative group hover:scale-105">
              <span className="relative z-10">Contact</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9F2D2D] transition-all duration-300 group-hover:w-full"></div>
            </Link>

          </nav>

          {/* Mobile Actions & Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <Link href="/Contact">
              <Button className="bg-[#9F2D2D] hover:bg-blue-700 text-white px-3 py-2 rounded-md text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                Contact
              </Button>
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="text-slate-600 hover:text-[#9F2D2D] focus:outline-none p-2 rounded-md hover:bg-slate-100 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X size={22} className="transition-all duration-300" />
              ) : (
                <Menu size={22} className="transition-all duration-300" />
              )}
            </button>
          </div>

          {/* Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-6">

            <Button onClick={onGetStartedClick} className="bg-[#9F2D2D] hover:bg-[#7A1E2D] text-white px-6 py-2.5 rounded-md font-medium transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 relative overflow-hidden group">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#7A1E2D] to-[#9F2D2D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg max-h-[70vh] overflow-y-auto animate-in slide-in-from-top-4 duration-300 relative z-40">
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                className="block px-3 py-2.5 text-slate-1000 hover:bg-blue-50 hover:text-[#9F2D2D] rounded-md font-medium transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-in slide-in-from-left-4 duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2.5 text-slate-1000 hover:bg-blue-50 hover:text-[#9F2D2D] rounded-md font-medium transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-in slide-in-from-left-4 duration-300 delay-75"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* COURSES Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileSection('courses')}
                  className="w-full flex justify-between items-center px-3 py-2.5 text-slate-1000 hover:bg-blue-50 hover:text-[#9F2D2D] rounded-md font-medium transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-in slide-in-from-left-4 duration-300 delay-150"
                >
                  <span>Courses</span>
                  <ChevronDown className={`w-4 h-4 transition-all duration-500 ${openMobileSection === 'courses' ? 'rotate-180 scale-110' : ''}`} />
                </button>

                {openMobileSection === 'courses' && (
                  <div className="ml-4 mt-1 space-y-1">
                    {/* IT Service Management */}
                    <div>
                      <button
                        onClick={() => toggleMobileSubSection('itil')}
                        className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md"
                      >
                        <span>IT Service Management</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${openMobileSubSection === 'itil' ? 'rotate-180' : ''}`} />
                      </button>

                      {openMobileSubSection === 'itil' && (
                        <div className="ml-4 mt-1 space-y-1">
                          <Link href="/ITL4Management" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>
                            ITIL® 4 Foundation
                          </Link>

                          {/* ITIL Practice Manager with sub-sub menus */}
                          <div>
                            <button
                              onClick={() => toggleMobileSubSubSection('practice-manager')}
                              className="w-full flex justify-between items-center px-3 py-1 text-xs text-gray-600 hover:text-blue-700 rounded-md"
                            >
                              <span>ITIL® 4 Practice Manager</span>
                              <ChevronDown className={`w-2 h-2 transition-transform ${openMobileSubSubSection === 'practice-manager' ? 'rotate-180' : ''}`} />
                            </button>

                            {openMobileSubSubSection === 'practice-manager' && (
                              <div className="ml-4 mt-1 space-y-1">
                                {/* MSF */}
                                <div>
                                  <button
                                    onClick={() => toggleMobilePracticeManager('msf')}
                                    className="w-full flex justify-between items-center px-2 py-1 text-xs text-gray-500 hover:text-blue-700 rounded-md"
                                  >
                                    <span>MSF - Monitor, Support & Fulfil</span>
                                    <ChevronDown className={`w-2 h-2 transition-transform ${openMobilePracticeManager === 'msf' ? 'rotate-180' : ''}`} />
                                  </button>

                                  {openMobilePracticeManager === 'msf' && (
                                    <div className="ml-3 mt-1 space-y-1">
                                      <Link href="/ServiceDesk" className="block px-2 py-1 text-xs text-gray-400 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Service Desk</Link>
                                      <Link href="/IncidentManagement" className="block px-2 py-1 text-xs text-gray-400 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Incident Management</Link>
                                      <Link href="/ProblemManagement" className="block px-2 py-1 text-xs text-gray-400 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Problem Management</Link>
                                      <Link href="/ServiceRequestManagement" className="block px-2 py-1 text-xs text-gray-400 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Service Request Management</Link>
                                      <Link href="/MonitoringEventManagement" className="block px-2 py-1 text-xs text-gray-400 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Monitoring & Event Management</Link>
                                    </div>
                                  )}
                                </div>

                                {/* PIC */}
                                <div>
                                  <button
                                    onClick={() => toggleMobilePracticeManager('pic')}
                                    className="w-full flex justify-between items-center px-2 py-1 text-xs text-gray-500 hover:text-blue-700 rounded-md"
                                  >
                                    <span>PIC - Plan, Implement & Control</span>
                                    <ChevronDown className={`w-2 h-2 transition-transform ${openMobilePracticeManager === 'pic' ? 'rotate-180' : ''}`} />
                                  </button>

                                  {openMobilePracticeManager === 'pic' && (
                                    <div className="ml-3 mt-1 space-y-1">
                                      <Link href="/ChangeEnablement" className="block px-2 py-1 text-xs text-gray-400 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Change Enablement</Link>
                                      <Link href="/ReleaseManagement" className="block px-2 py-1 text-xs text-gray-400 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Release Management</Link>
                                      <Link href="/ServiceConfiguration" className="block px-2 py-1 text-xs text-gray-400 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Service Configuration Management</Link>
                                      <Link href="/DeploymentManagement" className="block px-2 py-1 text-xs text-gray-400 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Deployment Management</Link>
                                      <Link href="/ItAssetManage" className="block px-2 py-1 text-xs text-gray-400 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>IT Asset Management</Link>
                                    </div>
                                  )}
                                </div>

                                {/* CAI */}
                                <div>
                                  <button
                                    onClick={() => toggleMobilePracticeManager('cai')}
                                    className="w-full flex justify-between items-center px-2 py-1 text-xs text-gray-500 hover:text-blue-700 rounded-md"
                                  >
                                    <span>CAI - Collaborate, Assure & Improve</span>
                                    <ChevronDown className={`w-2 h-2 transition-transform ${openMobilePracticeManager === 'cai' ? 'rotate-180' : ''}`} />
                                  </button>

                                  {openMobilePracticeManager === 'cai' && (
                                    <div className="ml-3 mt-1 space-y-1">
                                      <Link href="/ContinuationImprovement" className="block px-2 py-1 text-xs text-gray-400 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Continual Improvement</Link>
                                      <Link href="/RelationshipManagement" className="block px-2 py-1 text-xs text-gray-400 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Relationship Management</Link>
                                      <Link href="/ServiceLevelManagement" className="block px-2 py-1 text-xs text-gray-400 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Service Level Management</Link>
                                      <Link href="/InformationSecurityMan" className="block px-2 py-1 text-xs text-gray-400 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Information Security Management</Link>
                                      <Link href="/SupplierManagement" className="block px-2 py-1 text-xs text-gray-400 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Supplier Management</Link>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* ITIL Managing Professional with sub-sub menus */}
                          <div>
                            <button
                              onClick={() => toggleMobileSubSubSection('managing-professional')}
                              className="w-full flex justify-between items-center px-3 py-1 text-xs text-gray-600 hover:text-blue-700 rounded-md"
                            >
                              <span>ITIL® 4 Managing Professional</span>
                              <ChevronDown className={`w-2 h-2 transition-transform ${openMobileSubSubSection === 'managing-professional' ? 'rotate-180' : ''}`} />
                            </button>

                            {openMobileSubSubSection === 'managing-professional' && (
                              <div className="ml-4 mt-1 space-y-1">
                                <Link href="/ITL4SCDS" className="block px-2 py-1 text-xs text-gray-500 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>ITIL® 4 Specialist Create, Deliver and Support</Link>
                                <Link href="/ITL4SDSV" className="block px-2 py-1 text-xs text-gray-500 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>ITIL® 4 Specialist Drive Stakeholder Value</Link>
                                <Link href="/ITL4SHVI" className="block px-2 py-1 text-xs text-gray-500 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>ITIL® 4 Specialist High Velocity IT</Link>
                                <Link href="/ITL4SDPI" className="block px-2 py-1 text-xs text-gray-500 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>ITIL® 4 Strategist Direct Plan & Improve</Link>
                              </div>
                            )}
                          </div>

                          {/* ITIL Specialist with sub-sub menus */}
                          <div>
                            <button
                              onClick={() => toggleMobileSubSubSection('specialist')}
                              className="w-full flex justify-between items-center px-3 py-1 text-xs text-gray-600 hover:text-blue-700 rounded-md"
                            >
                              <span>ITIL® 4 Specialist</span>
                              <ChevronDown className={`w-2 h-2 transition-transform ${openMobileSubSubSection === 'specialist' ? 'rotate-180' : ''}`} />
                            </button>

                            {openMobileSubSubSection === 'specialist' && (
                              <div className="ml-4 mt-1 space-y-1">
                                <Link href="/ITL4SCDS" className="block px-2 py-1 text-xs text-gray-500 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Create, Deliver and Support</Link>
                                <Link href="/ITL4SDSV" className="block px-2 py-1 text-xs text-gray-500 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Drive Stakeholder Value</Link>
                                <Link href="/ITL4SHVI" className="block px-2 py-1 text-xs text-gray-500 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>High Velocity IT</Link>
                                <Link href="/ITL4SDPI" className="block px-2 py-1 text-xs text-gray-500 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Direct Plan & Improve</Link>
                                <Link href="/AcquiringAndManagingCS" className="block px-2 py-1 text-xs text-gray-500 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Acquiring And Managing Cloud Service</Link>
                                <Link href="/SustainabilityInDigitalAI" className="block px-2 py-1 text-xs text-gray-500 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Sustainability In Digital and IT</Link>
                                <Link href="/BusinessRelationshipManage" className="block px-2 py-1 text-xs text-gray-500 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Business Relationship Management</Link>
                                <Link href="/ItAssetManage" className="block px-2 py-1 text-xs text-gray-500 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>IT Asset Management</Link>
                                <Link href="/MonitorSupportFulfil" className="block px-2 py-1 text-xs text-gray-500 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Monitor, Support and Fulfil</Link>
                              </div>
                            )}
                          </div>

                          {/* ITIL Strategist with sub-sub menus */}
                          <div>
                            <button
                              onClick={() => toggleMobileSubSubSection('strategist')}
                              className="w-full flex justify-between items-center px-3 py-1 text-xs text-gray-600 hover:text-blue-700 rounded-md"
                            >
                              <span>ITIL® 4 Strategist</span>
                              <ChevronDown className={`w-2 h-2 transition-transform ${openMobileSubSubSection === 'strategist' ? 'rotate-180' : ''}`} />
                            </button>

                            {openMobileSubSubSection === 'strategist' && (
                              <div className="ml-4 mt-1 space-y-1">
                                <Link href="/DigitalItService" className="block px-2 py-1 text-xs text-gray-500 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Digital IT & Services</Link>
                              </div>
                            )}
                          </div>

                          {/* SIAM with sub-sub menus */}
                          <div>
                            <button
                              onClick={() => toggleMobileSubSubSection('siam')}
                              className="w-full flex justify-between items-center px-3 py-1 text-xs text-gray-600 hover:text-blue-700 rounded-md"
                            >
                              <span>SIAM</span>
                              <ChevronDown className={`w-2 h-2 transition-transform ${openMobileSubSubSection === 'siam' ? 'rotate-180' : ''}`} />
                            </button>

                            {openMobileSubSubSection === 'siam' && (
                              <div className="ml-4 mt-1 space-y-1">
                                <Link href="/SIAMFoundation" className="block px-2 py-1 text-xs text-gray-500 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>SIAM Foundation</Link>
                                <Link href="/SIAMProfessional" className="block px-2 py-1 text-xs text-gray-500 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>SIAM Professional</Link>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Project & Program Management */}
                    <div>
                      <button
                        onClick={() => toggleMobileSubSection('project')}
                        className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md"
                      >
                        <span>Project & Program Management</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${openMobileSubSection === 'project' ? 'rotate-180' : ''}`} />
                      </button>

                      {openMobileSubSection === 'project' && (
                        <div className="ml-4 mt-1 space-y-1">
                          <Link href="/PMP" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>PMP</Link>
                          <Link href="/ACP" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>ACP</Link>
                          <Link href="/Prince2Foundation" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Prince2 Foundation</Link>
                          <Link href="/Prince2Practitioner" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Prince2 Practitioner</Link>
                          <Link href="/Prince2AgileFoundation" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Prince2 Agile Foundation</Link>
                          <Link href="/Prince2AgilePractitioner" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Prince2 Agile Practitioner</Link>
                          <Link href="/MSPFoundation" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>MSP Foundation</Link>
                          <Link href="/MSPPractitioner" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>MSP Practitioner</Link>
                        </div>
                      )}
                    </div>

                    {/* Agile, Scrum & Kanban */}
                    <div>
                      <button
                        onClick={() => toggleMobileSubSection('agile')}
                        className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md"
                      >
                        <span>Agile, Scrum & Kanban</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${openMobileSubSection === 'agile' ? 'rotate-180' : ''}`} />
                      </button>

                      {openMobileSubSection === 'agile' && (
                        <div className="ml-4 mt-1 space-y-1">
                          <Link href="/LeadingSAFeAgilist" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Leading SAFe Agilist</Link>
                          <Link href="/SAFePO-PM" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>SAFe PO/PM</Link>
                          <Link href="/SAFeforTeams" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>SAFe for Teams</Link>
                          <Link href="/SAFeScrumMaster" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>SAFe Scrum Master</Link>
                          <Link href="/SAFeAdvancedScrumMaster" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>SAFe Advanced Scrum Master</Link>
                          <Link href="/PScrumM1" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Professional Scrum Master I (PSM I)</Link>
                          <Link href="/PScrumM2" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Professional Scrum Master II (PSM II)</Link>
                          <Link href="/PSPO1" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Professional Scrum Product Owner I (PSPO I)</Link>
                          <Link href="/PSPO2" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Professional Scrum Product Owner II (PSPO II)</Link>
                          <Link href="/PSK1" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Professional Scrum with Kanban (PSK I)</Link>
                          <Link href="/CSM" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Certified Scrum Master</Link>
                          <Link href="/CASM" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Certified Advanced Scrum Master</Link>
                          <Link href="/CSPO" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Certified Scrum Product Owner</Link>
                          <Link href="/ICP-ACC" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>ICP-ACC</Link>
                        </div>
                      )}
                    </div>

                    {/* Quality Management */}
                    <div>
                      <button
                        onClick={() => toggleMobileSubSection('quality')}
                        className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md"
                      >
                        <span>Quality Management</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${openMobileSubSection === 'quality' ? 'rotate-180' : ''}`} />
                      </button>

                      {openMobileSubSection === 'quality' && (
                        <div className="ml-4 mt-1 space-y-1">
                          <Link href="/LeanSSGB" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Lean Six Sigma Green Belt</Link>
                          <Link href="/LeanSSBB" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Lean Six Sigma Black Belt</Link>
                        </div>
                      )}
                    </div>

                    {/* DevOps & Business Analysis */}
                    <div>
                      <button
                        onClick={() => toggleMobileSubSection('devops')}
                        className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md"
                      >
                        <span>DevOps & Business Analysis</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${openMobileSubSection === 'devops' ? 'rotate-180' : ''}`} />
                      </button>

                      {openMobileSubSection === 'devops' && (
                        <div className="ml-4 mt-1 space-y-1">
                          <Link href="/SREFoundation" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>SRE Foundation</Link>
                          <Link href="/SREPractitioner" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>SRE Practitioner</Link>
                          <Link href="/DevOpsFoundation" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>DevOps Foundation</Link>
                          <Link href="/DevOpsMaster" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>DevOps Master</Link>
                          <Link href="/BusinessAnalysisFoundation" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Business Analysis Foundation</Link>
                          <Link href="/BusinessAnalysisPractice" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Business Analysis Practice</Link>
                          <Link href="/AgileBusinessAnalysis" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>Agile Business Analysis</Link>
                        </div>
                      )}
                    </div>

                    {/* Software Testing */}
                    <div>
                      <button
                        onClick={() => toggleMobileSubSection('testing')}
                        className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md"
                      >
                        <span>Software Testing & Others</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${openMobileSubSection === 'testing' ? 'rotate-180' : ''}`} />
                      </button>

                      {openMobileSubSection === 'testing' && (
                        <div className="ml-4 mt-1 space-y-1">
                          <Link href="/ISTQBFoundation" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>ISTQB Foundation</Link>
                          <Link href="/ISTQBAdvanced" className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-700" onClick={() => setIsMobileMenuOpen(false)}>ISTQB Advanced</Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/Events"
                className="block px-3 py-2.5 text-slate-1000 hover:bg-blue-50 hover:text-[#9F2D2D] rounded-md font-medium transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-in slide-in-from-left-4 duration-300 delay-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/CorporateTraining"
                className="block px-3 py-2.5 text-slate-1000 hover:bg-blue-50 hover:text-[#9F2D2D] rounded-md font-medium transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-in slide-in-from-left-4 duration-300 delay-[375ms]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Corporate Training
              </Link>
              <Link
                href="/Contact"
                className="block px-3 py-2.5 text-slate-1000 hover:bg-blue-50 hover:text-[#9F2D2D] rounded-md font-medium transition-all duration-300 hover:scale-105 hover:translate-x-2 animate-in slide-in-from-left-4 duration-300 delay-[450ms]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-3 border-t border-slate-200 mt-3 animate-in slide-in-from-bottom-4 duration-300 delay-500">

              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
