'use strict';

var multiparty = require('multiparty');
var traceur = require('traceur');
var Project = traceur.require(__dirname + '/../models/project.js');
var Mongo = require('mongodb');
var projects = global.nss.db.collection('projects');

exports.index = (req, res)=>{
  Project.findAll(projects=>{
    res.render('projects/index', {projects:projects, title: 'Project: List'});
  });
};

exports.new = (req, res)=>{
  res.render('projects/new', {title: 'Project: New'});
};

exports.create = (req, res)=>{
  var form = new multiparty.Form();

  form.parse(req, (err, fields, files)=>{
    Project.create(res.locals.user._id, fields, files, ()=>{
      res.redirect('/projects');
    });
  });
};


exports.show = (req, res)=>{
  Project.findById(req.params.id, project=>{
    res.render('projects/show', {project:project, title: 'Project: Show'});
  });
};

exports.destroy = (req, res)=>{
  var _id = Mongo.ObjectID(req.params.id);
  projects.findAndRemove({_id:_id}, (e, r)=>{
    res.redirect('/projects');
  });
};

exports.addPhotos = (req, res)=> {
  Project.findById(req.params.id, p=>{
    p.addPhoto(req.files, ()=>{
      res.redirect('/projects');
    });
  });
};

exports.removePic = (req, res)=> {
  Project.findById(req.params.id, p=>{
    p.removePhoto(req.body.url, ()=>{
      p.update(()=>{
        res.redirect('/projects');
      });
    });
  });
};

exports.update = (req, res)=> {
  Project.findById(req.params.id, p=>{
    p.update(req.body, ()=>{
      res.redirect('/projects');
    });

  });
};

exports.edit = (req, res)=>{
  Project.findById(req.params.id, project=>{
    res.render('projects/edit', {project:project, title: 'Project: Edit'});
  });
};
