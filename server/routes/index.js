var express = require('express');
var router = express.Router();

var ClassifyModel = require("../Model/classify");
var ArticleModel = require("../Model/createArticle");
var CommentModel = require("../Model/comment");
var AuthorsModel = require("../Model/zhuce");
var ShoucModel = require("../Model/shouc");
var ImgModel = require("../Model/img");
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});
//分类提交
router.post("/addclass", function(req, res) {
	var classify = req.body.classify;
	var clas = new ClassifyModel({
		name: classify,
		createtime: new Date()
	});
	clas.save(function(err, ress) {
		if(err) {
			console.log(err)
		} else {
			console.log(res)

			ClassifyModel.find({}, function(err, resss) {
				if(err) {
					console.log(err)
				} else {
					res.send(resss)
				}
			})
		}
	})
});
//分类获取
router.get("/getclass", function(req, res) {
	ClassifyModel.find({}, function(err, ressss) {
		if(err) {
			console.log(err)
		} else {
			res.send(ressss)
		}
	})
});
//分类删除
router.get("/delclass", function(req, res) {
	var id = req.query.id;
	ClassifyModel.findByIdAndRemove(id, function(err, rex) {
		if(err) {
			console.log(err)
		} else {
			ClassifyModel.find({}, function(err, rex) {
				if(err) {
					console.log(err)
				} else {
					res.send(rex)
				}
			})
		}
	})
});
//分类修改
router.get("/updataClass", function(req, res) {
	var id = req.query.id;
	var name = req.query.name;
	var createtime = new Date();
	console.log(id)
	console.log(name)
	var updatestr = { name: name, createtime: createtime };

	ClassifyModel.findByIdAndUpdate(id, updatestr, function(err, ref) {
		if(err) {
			console.log('Error', err)
		} else {
			ClassifyModel.find({}, function(err, ref) {
				if(err) {
					console.log(err)
				} else {
					res.send(ref)
				}
			})
		}
	})
});
//文章提交
router.post("/createarticle", function(req, res) {
	var obj = req.body.article
	console.log(obj)
	var art = new ArticleModel({
		artileTitle: obj.artileTitle,
		content: obj.content,
		articleClass: obj.articleClass,
		artileName: obj.artileName,
		zanNum: obj.zanNum,
		createtime: new Date()
	});
	art.save(function(err, res) {
		if(err) {
			console.log(err)
		} else {
			ArticleModel.find({}, function(err, rss) {
				if(err) {
					console.log(err)
				} else {
					res.send(rss)
				}
			})
		}
	})
});
//文章获取
router.get("/getarticle", function(req, res) {
	ArticleModel.find({}, function(err, ressss) {
		if(err) {
			console.log(err)
		} else {
			res.send(ressss)
		}
	})
});
//文章删除
router.get("/delarticle", function(req, res) {
	var id = req.query.id;
	ArticleModel.findByIdAndRemove(id, function(err, rex) {
		if(err) {
			console.log(err)
		} else {
			ArticleModel.find({}, function(err, rex) {
				if(err) {
					console.log(err)
				} else {
					res.send(rex)
				}
			})
		}
	})

});
//文章修改
router.post("/articleedit", function(req, res) {
	var obj = req.body.articlEdit
	var artileTitle = obj.artileTitle;
	var content = obj.content;
	var articleClass = obj.articleClass;
	var id = obj.id;
	var createtime = new Date()
	var updatestr = { artileTitle: artileTitle, content: content, articleClass: articleClass, createtime: createtime };
	ArticleModel.findByIdAndUpdate(id, updatestr, function(err, reff) {
		if(err) {
			console.log('Error', err)
		} else {
			ArticleModel.find({}, function(err, reff) {
				if(err) {
					console.log(err)
				} else {
					res.send(reff)
				}
			})
		}
	})
});
//根据id文章获取
router.get("/getarticleid", function(req, res) {
	var id = req.query.id
	console.log(id);
	ArticleModel.findById(id, function(err, ressss) {
		if(err) {
			console.log(err)
		} else {
			res.send(ressss)
		}
	})
});
//评论提交
router.post("/comment", function(req, res) {
	var obj = req.body.commentpost
	console.log(obj)
	var articleId = obj.articleId;
	var comm = new CommentModel({
		author: obj.author,
		content: obj.content,
		articleId: obj.articleId,
		createtime: new Date()
	});
	comm.save(function(err, rpp) {
		if(err) {
			console.log(err)
		} else {
			CommentModel.find({ articleId }, function(err, rpp) {
				if(err) {
					console.log(err)
				} else {
					res.send(rpp)
				}
			})
		}
	})
});
//根据id获取评论
router.get("/articleidget", function(req, res) {
	var articleId = req.query.id;
	console.log(articleId);
	CommentModel.find({ articleId }, function(err, reqqq) {
		if(err) {
			console.log(err)
		} else {
			res.send(reqqq)
		}
	})
});
//根据id获取评论数量
router.get("/getnumber", function(req, res) {
	var articleId = { articleId: req.query.id }
	console.log(articleId)
	CommentModel.count(articleId, function(err, num) {
		if(err) {
			console.log('Error', err)
		} else {
			//			console.log(num)
			var x = num + ""
			res.send(x)
		}
	})
});
//根据id点赞数量
router.get("/zannumm", function(req, res) {
	var id = req.query.id;
	//	console.log(id);
	ArticleModel.findById(id, function(err, r) {
		if(err) {
			console.log(err)
		} else {
			res.send(r)
		}
	})
});
//根据id提交点赞数量
router.post("/dianzan", function(req, res) {
	var id = req.body.article.id
	var zanNum = req.body.article.zanNum
	var updates = { zanNum: zanNum };
	//	console.log(id)
	//	console.log(zanNum)
	ArticleModel.findByIdAndUpdate(id, updates, function(err, reff) {
		if(err) {
			console.log('Error', err)
		} else {
			ArticleModel.find({ _id: id }, function(err, reffs) {
				if(err) {
					console.log(err)
				} else {
					res.send(reffs)
					//					console.log(reffs)
				}
			})
		}
	})
});
//用户名注册
router.post("/zhuce", function(req, res) {
	var obj = req.body
	console.log(obj)
	var authors = new AuthorsModel({
		name: obj.name,
		pass: obj.pass,
		createtime: new Date()
	});
	authors.save(function(err, ress) {
		if(err) {
			console.log(err)
		} else {
			res.send({ sta: "success" })
		}
	})
});
//注册用户获取
router.get("/getauthors", function(req, res) {
	AuthorsModel.find({}, function(err, rexx) {
		if(err) {
			console.log(err)
		} else {
			res.send(rexx)
		}
	})
});
//用户修改
router.get("/updatauser", function(req, res) {
	var id = req.query.id;
	var name = req.query.name;
	var createtime = new Date();
	console.log(id)
	console.log(name)
	var updatestr = { name: name, createtime: createtime };

	AuthorsModel.findByIdAndUpdate(id, updatestr, function(err, re) {
		if(err) {
			console.log('Error', err)
		} else {
			AuthorsModel.findById(id, function(err, re) {
				if(err) {
					console.log(err)
				} else {
					res.send(re)
				}
			})
		}
	})
});
//全部评论获取
router.get("/getinglun", function(req, res) {
	CommentModel.find({}, function(err, rexxx) {
		if(err) {
			console.log(err)
		} else {
			res.send(rexxx)
		}
	})
});
//评论删除
router.get("/commendelete", function(req, res) {
	var id = req.query.id;
	CommentModel.findByIdAndRemove(id, function(err, rex) {
		if(err) {
			console.log(err)
		} else {
			CommentModel.find({}, function(err, rex) {
				if(err) {
					console.log(err)
				} else {
					res.send(rex)
				}
			})
		}
	})
});
//评论修改
router.get("/updatapinglun", function(req, res) {
	var id = req.query.id;
	var content = req.query.content;
	var createtime = new Date();
	console.log(id)
	console.log(content)
	var updatestr = { content: content, createtime: createtime };

	CommentModel.findByIdAndUpdate(id, updatestr, function(err, reff) {
		if(err) {
			console.log('Error', err)
		} else {
			CommentModel.find({}, function(err, reff) {
				if(err) {
					console.log(err)
				} else {
					res.send(reff)
				}
			})
		}
	})
});
//收藏提交
router.post("/shouc", function(req, res) {
	var obj = req.body
	console.log(obj)
	var artt = new ShoucModel({
		artileTitle: obj.artileTitle,
		content: obj.content,
		articleClass: obj.articleClass,
		artileName:obj.artileName,
		zanNum: obj.zanNum,
		createtime: new Date()
	});
	artt.save(function(err, res) {
		if(err) {
			console.log(err)
		} else {
			ShoucModel.find({}, function(err, rss) {
				if(err) {
					console.log(err)
				} else {
					res.send(rss)
				}
			})
		}
	})
});
//获取收藏
router.get("/getshou", function(req, res) {
	ShoucModel.find({}, function(err, rea) {
		if(err) {
			console.log(err)
		} else {
			res.send(rea)
		}
	})
});

module.exports = router;