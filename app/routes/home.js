'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'My Website'});
};

exports.about = (req, res)=>{
  res.render('home/about', {title: 'About Me'});
};

exports.projects = (req, res)=>{
  res.render('home/projects', {title: 'My Projects'});
};

exports.resume = (req, res)=>{
  res.render('home/resume', {title: 'My Resume'});
};

exports.contact = (req, res)=>{
  res.render('home/contact', {title: 'Contact Me'});
};
