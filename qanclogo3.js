(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.918],254.4,121.3,-266.8,-115.6).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape.setTransform(0.0143,-0.0068,0.2341,0.2697);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2D113F","#22356B","#0072FF","#64E220","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FBC60E","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.188,0.314,0.416,0.42,0.471,0.498,0.506,0.522,0.537,0.549,0.553,0.553,1],254.4,121.3,-266.8,-115.6).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape_1.setTransform(0.0143,-0.0068,0.2341,0.2697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.1,-50.3,98.4,100.6);
p.frameBounds = [rect];


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.918],254.4,-115.6,-266.8,121.3).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape.setTransform(0.0111,-0.0125,0.2341,0.2696);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2D113F","#0000FF","#00B2FF","#4EC63C","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FBC60E","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.212,0.314,0.416,0.42,0.471,0.498,0.506,0.522,0.537,0.549,0.553,0.553,1],254.4,-115.6,-266.8,121.3).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape_1.setTransform(0.0111,-0.0125,0.2341,0.2696);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.1,-50.3,98.4,100.6);
p.frameBounds = [rect];


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.918],254.4,-115.6,-266.8,121.3).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape.setTransform(0.0143,-0.0068,0.2341,0.2697);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2D113F","#0000FF","#00B2FF","#4EC63C","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FBC60E","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.212,0.314,0.416,0.42,0.471,0.498,0.506,0.522,0.537,0.549,0.553,0.553,1],254.4,-115.6,-266.8,121.3).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape_1.setTransform(0.0143,-0.0068,0.2341,0.2697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.1,-50.3,98.4,100.6);
p.frameBounds = [rect];


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.918],254.4,-115.6,-266.8,121.3).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape.setTransform(-0.0088,0.0147,0.2345,0.2695);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2D113F","#0000FF","#006EFF","#4EC63C","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FBC60E","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.192,0.314,0.416,0.42,0.471,0.498,0.506,0.522,0.537,0.549,0.553,0.553,1],254.4,-115.6,-266.8,121.3).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape_1.setTransform(-0.0088,0.0147,0.2345,0.2695);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.2,-50.2,98.5,100.6);
p.frameBounds = [rect];


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.918],254.4,-115.6,-266.8,121.3).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape.setTransform(-0.012,0.0119,0.2345,0.2695);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2D113F","#0000FF","#006EFF","#4EC63C","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FBC60E","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.192,0.314,0.416,0.42,0.471,0.498,0.506,0.522,0.537,0.549,0.553,0.553,1],254.4,-115.6,-266.8,121.3).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape_1.setTransform(-0.012,0.0119,0.2345,0.2695);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.2,-50.2,98.5,100.6);
p.frameBounds = [rect];


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.918],254.4,121.3,-266.8,-115.6).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape.setTransform(0.0155,0.0267,0.2344,0.2696,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2D113F","#22356B","#0064B9","#64E220","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FBC60E","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.192,0.314,0.416,0.42,0.471,0.498,0.506,0.522,0.537,0.549,0.553,0.553,1],254.4,121.3,-266.8,-115.6).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape_1.setTransform(0.0155,0.0267,0.2344,0.2696,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.2,-50.2,98.5,100.6);
p.frameBounds = [rect];


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.918],254.4,121.3,-266.8,-115.6).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape.setTransform(0.0123,0.0296,0.2343,0.2695,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2D113F","#22356B","#0064B9","#64E220","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FBC60E","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.192,0.314,0.416,0.42,0.471,0.498,0.506,0.522,0.537,0.549,0.553,0.553,1],254.4,121.3,-266.8,-115.6).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape_1.setTransform(0.0123,0.0296,0.2343,0.2695,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.2,-50.2,98.5,100.6);
p.frameBounds = [rect];


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2D113F","#22356B","#2D6494","#64B546","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FFC701","#FFB700","#EA1526","#EA0000"],[0.012,0.098,0.188,0.314,0.416,0.42,0.471,0.498,0.506,0.541,0.588,0.667,0.776,0.918],254.4,121.3,-266.8,-115.6).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape.setTransform(0.0239,0.0011,0.2342,0.2697,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.1,-50.3,98.4,100.6);
p.frameBounds = [rect];


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2D113F","#22356B","#2D6494","#64B546","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FFC701","#FFB700","#EA1526","#EA0000"],[0.012,0.098,0.188,0.314,0.416,0.42,0.471,0.498,0.506,0.541,0.588,0.667,0.776,0.918],254.4,121.3,-266.8,-115.6).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape.setTransform(0.0239,0.0011,0.2342,0.2697,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.1,-50.3,98.4,100.6);
p.frameBounds = [rect];


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#FF0008","#FF0000"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.914],254.4,121.3,-266.8,-115.6).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape.setTransform(0.0123,0.0125,0.2343,0.2696,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2D113F","#22356B","#2D6494","#64B546","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FBC60E","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.188,0.314,0.416,0.42,0.471,0.498,0.506,0.522,0.537,0.549,0.553,0.553,1],254.4,121.3,-266.8,-115.6).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape_1.setTransform(0.0123,0.0125,0.2343,0.2696,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.2,-50.3,98.5,100.6);
p.frameBounds = [rect];


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.918],254.4,-115.6,-266.8,121.3).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape.setTransform(49.2252,50.296,0.2344,0.2697);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2D113F","#22356B","#2D6494","#64B546","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FBC60E","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.188,0.314,0.416,0.42,0.471,0.498,0.506,0.522,0.537,0.549,0.553,0.553,1],254.4,-115.6,-266.8,121.3).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape_1.setTransform(49.2252,50.296,0.2344,0.2697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, rect = new cjs.Rectangle(0,0,98.5,100.6), [rect]);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.918],254.4,-115.6,-266.8,121.3).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape.setTransform(49.2252,50.296,0.2344,0.2697);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2D113F","#22356B","#2D6494","#64C946","#99FF17","#9CFD18","#C3E625","#D2DD2A","#D3DC29","#EBD017","#FAC90D","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.188,0.322,0.412,0.416,0.455,0.475,0.475,0.502,0.529,0.549,0.553,0.553,1],254.4,-115.6,-266.8,121.3).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape_1.setTransform(49.2252,50.296,0.2344,0.2697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, rect = new cjs.Rectangle(0,0,98.5,100.6), [rect]);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(247,195,11,0)","#F7C30B","#ED9F19","#E68822","#E48025","#EA2F26","#AC1F24"],[0,0.573,0.573,0.612,0.643,0.663,0.776,0.918],254.4,-115.6,-266.8,121.3).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape.setTransform(49.2252,50.296,0.2344,0.2697);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2D113F","#22356B","#2D6494","#64B546","#99E269","#A8E857","#C6F530","#D2FA21","#D3F920","#EBEB0E","#FAE204","#FFDF00","#F7C30B","rgba(247,195,11,0)","rgba(0,0,0,0)"],[0.012,0.098,0.188,0.314,0.416,0.427,0.463,0.482,0.482,0.506,0.529,0.549,0.573,0.573,1],254.4,-115.6,-266.8,121.3).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape_1.setTransform(49.2252,50.296,0.2344,0.2697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, rect = new cjs.Rectangle(0,0,98.5,100.6), [rect]);


(lib._8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(255,216,0,0)","#FFD800","#FFB400","#FF9D00","#FF9500","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.635,0.659,0.776,0.918],254.4,-115.6,-266.8,121.3).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape.setTransform(49.2252,50.296,0.2344,0.2697);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2D113F","#22356B","#2D6494","#64B546","#99CA69","#9CCA67","#C3C94C","#D2C942","#E1CF2C","#F2D514","#FCD905","#FFDA00","#FFD800","rgba(255,216,0,0)","rgba(0,0,0,0)"],[0.012,0.098,0.188,0.314,0.416,0.42,0.471,0.498,0.51,0.525,0.537,0.549,0.553,0.553,1],254.4,-115.6,-266.8,121.3).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape_1.setTransform(49.2252,50.296,0.2344,0.2697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._8, rect = new cjs.Rectangle(0,0,98.5,100.6), [rect]);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol8();
	this.instance.setTransform(49.2,50.3,1,1,0,0,0,49.2,50.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({alpha:1},4).wait(1));

	// Layer_11
	this.instance_1 = new lib.Tween15("synched",0);
	this.instance_1.setTransform(49.15,50.3);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween16("synched",0);
	this.instance_2.setTransform(49.15,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},26).to({state:[{t:this.instance_2}]},4).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({_off:true},4).wait(5));

	// Layer_12
	this.instance_3 = new lib.Tween13("synched",0);
	this.instance_3.setTransform(49.2,50.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween14("synched",0);
	this.instance_4.setTransform(49.2,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},26).to({state:[{t:this.instance_4}]},4).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({_off:true,alpha:1},4).wait(5));

	// Layer_1
	this.instance_5 = new lib.Tween17("synched",0);
	this.instance_5.setTransform(49.15,50.3,1,1,0,180,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(22).to({_off:false},0).to({startPosition:0},4).wait(9));

	// Layer_1
	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.setTransform(49.2,50.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween8("synched",0);
	this.instance_7.setTransform(49.2,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},18).to({state:[{t:this.instance_7}]},4).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({_off:true,alpha:1},4).wait(13));

	// Layer_1
	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(49.2,50.3,1,1,0,0,0,49.2,50.3);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({alpha:1},4).wait(17));

	// Layer_1
	this.instance_9 = new lib.Symbol4();
	this.instance_9.setTransform(49.2,50.3,1,1,0,0,0,49.2,50.3);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({alpha:1},4).wait(21));

	// Layer_1
	this.instance_10 = new lib._8();
	this.instance_10.setTransform(49.2,50.3,1,1,0,0,0,49.2,50.3);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},0).to({alpha:1},4).wait(25));

	// Layer_1
	this.instance_11 = new lib.Tween5("synched",0);
	this.instance_11.setTransform(49.15,50.3);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween6("synched",0);
	this.instance_12.setTransform(49.15,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},3).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({_off:false},0).to({_off:true,alpha:1},3).wait(29));

	// Layer_1
	this.instance_13 = new lib.Tween3("synched",0);
	this.instance_13.setTransform(49.1,50.3);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},3).wait(32));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.918],254.4,-115.6,-266.8,121.3).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape.setTransform(49.2123,50.3233,0.2343,0.2696);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2D113F","#22356B","#2D6494","#64B546","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FBC60E","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.188,0.314,0.416,0.42,0.471,0.498,0.506,0.522,0.537,0.549,0.553,0.553,1],254.4,-115.6,-266.8,121.3).s().p("EggzAdJMAAAg6RMBBnAAAMAAAA6Rg");
	this.shape_1.setTransform(49.2123,50.3233,0.2343,0.2696);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.1,0,98.6,100.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:
(lib.QancLogo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglAyQgVgUAAgeQAAgcAVgVQAWgVAcAAQAbAAATASIAAAMQgIgKgNgFQgNgHgMAAQgZABgTASQgSAUAAAYQAAAYASATQAUATAYAAQALAAAOgGQAOgGAHgJIAAAMQgVARgZAAQgcAAgWgVg");
	this.shape.setTransform(313.8,80.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEBFIAAiJIAIAAIAACJg");
	this.shape_1.setTransform(305.3,80.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1gyIAAB2IgIAAIAAiLIBzB5IAAh3IAJAAIAACOg");
	this.shape_2.setTransform(295.6,80.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEBFIAAiJIAIAAIAACJg");
	this.shape_3.setTransform(285.95,80.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVBFIAAiJIAJAAIAACBIAiAAIAAAIg");
	this.shape_4.setTransform(281.7,80.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkAyQgWgVAAgdQAAgcAVgVQAWgVAcAAQAbAAATASIAAAMQgIgKgNgFQgMgHgNAAQgZABgTASQgSAUAAAYQAAAYASATQAUATAYAAQAMAAANgGQANgGAIgJIAAAMQgVARgZAAQgcAAgVgVg");
	this.shape_5.setTransform(271.025,80.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZA/QgLgIgFgNIAIgEQAJAZAYAAQANAAALgKQAJgKABgNQAAgKgKgIQgEgDgOgHIgYgMQgPgJAAgQQAAgQAKgJQAKgKAOAAQALAAAJAGQAKAFAFAIIgHAGQgKgQgSgBQgKABgIAHQgHAHAAALQAAAKAIAHQAGAEAKAGIAbAMQAPAKAAASQAAARgNAMQgMALgRAAQgOAAgLgIg");
	this.shape_6.setTransform(253.75,80.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggBFIAAiJIBBAAIAAAIIg4AAIAAAyIA3AAIAAAIIg3AAIAAA/IA4AAIAAAIg");
	this.shape_7.setTransform(244.25,80.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglAyQgVgUAAgeQAAgcAVgVQAWgVAcAAQAbAAATASIAAAMQgIgKgNgFQgMgHgNAAQgZABgTASQgSAUAAAYQAAAYASATQAUATAYAAQAMAAANgGQANgGAIgJIAAAMQgWARgYAAQgcAAgWgVg");
	this.shape_8.setTransform(232.475,80.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1gyIAAB2IgJAAIAAiLIBzB5IAAh3IAJAAIAACOg");
	this.shape_9.setTransform(218.15,80.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggBFIAAiJIBBAAIAAAIIg4AAIAAAyIA3AAIAAAIIg3AAIAAA/IA4AAIAAAIg");
	this.shape_10.setTransform(205.9,80.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDBFIAAiJIAHAAIAACJg");
	this.shape_11.setTransform(199.175,80.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglAyQgVgUAAgeQAAgcAVgVQAWgVAcAAQAbAAATASIAAAMQgIgKgMgFQgNgHgNAAQgZABgTASQgSAUAAAYQgBAZAUASQATATAYAAQAMAAANgGQAOgGAHgJIAAAMQgVARgZAAQgcAAgWgVg");
	this.shape_12.setTransform(190.25,80.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaA/QgLgIgEgNIAHgEQALAZAXAAQAMAAALgKQAKgKAAgNQAAgKgJgIQgFgDgOgHIgYgMQgOgJAAgQQAAgQAKgJQAKgKAOAAQAYAAAKATIgGAGQgLgQgSgBQgKABgHAHQgIAHAAALQAAAKAJAHQAFAEALAGIAaAMQAQALAAARQAAARgOAMQgMALgQAAQgOAAgMgIg");
	this.shape_13.setTransform(178.7,80.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgxAyQgWgVAAgdQAAgcAWgVQAVgVAcAAQAeAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgeAAQgcAAgVgVgAgrgrQgTATAAAYQAAAZATATQASATAZAAQAaAAATgTQASgTAAgZQAAgYgSgTQgTgTgaAAQgZAAgSATg");
	this.shape_14.setTransform(165.825,80.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAYBFIgshBIgFAAIAABBIgIAAIAAiJIARAAQAVAAAJAHQAOAKAAATQAAASgLAKQgKAIgRAAIAsBBgAgZgEIAMAAQAPAAAIgGQAKgJAAgNQAAgTgPgGQgGgDgSAAIgGAAg");
	this.shape_15.setTransform(153.975,80.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglA2QgGgIgCgKIgBgUIAAhVIAIAAIAABTQABAaAHAJQAKANAUAAQAVAAAKgNQAHgJAAgaIAAhTIAJAAIAABVIgBAUQgCAKgGAIQgPAQgXAAQgXAAgOgQg");
	this.shape_16.setTransform(143,80.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggBFIAAiJIBBAAIAAAIIg4AAIAAAyIA2AAIAAAIIg2AAIAAA/IA4AAIAAAIg");
	this.shape_17.setTransform(132.4,80.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag1gyIAAB2IgIAAIAAiLIBzB5IAAh3IAJAAIAACOg");
	this.shape_18.setTransform(119.9,80.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgtA9QgLgLAAgPQAAgQAOgOQAHgGAVgNIgKgOQgEgIgBgJQABgKAHgIQAJgIAKAAQALAAAGAHQAIAIgBALQABALgJAIQgEAGgMAJIAhAtIARgTIAIAEIgUAWIAVAcIgKAAIgRgXQgeAagUAAQgPAAgKgLgAgRgBQgOAHgHAHQgJAKAAALQAAAMAHAJQAJAJALgBQARAAAcgYIgigugAgPg5QgEAGgBAHQABAHAEAHIAIAMIANgLQAIgIAAgJQAAgGgFgFQgFgFgGgBQgIABgFAFg");
	this.shape_19.setTransform(212.15,59.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgwBFIAAiJIAZAAQAgAAASARQAWAVAAAeQAAAfgVAUQgTASggAAgAgnA9IAQAAQAcAAARgRQATgSAAgaQAAgbgVgSQgQgPgbAAIgQAAg");
	this.shape_20.setTransform(194.775,59.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAqBFIAAhGIhTAAIAABGIgJAAIAAiJIAJAAIAAA7IBTAAIAAg7IAJAAIAACJg");
	this.shape_21.setTransform(181.8,59.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgwBFIAAiJIAZAAQAfAAATARQAWAVAAAeQAAAfgVAUQgTASggAAgAgnA9IAQAAQAcAAARgRQASgRAAgbQAAgagUgTQgQgPgbAAIgQAAg");
	this.shape_22.setTransform(169.675,59.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAxBIIgTguIg7AAIgTAuIgJAAIA5iOIA6COgAgaASIA1AAIgbhCg");
	this.shape_23.setTransform(157.375,59.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgwBFIAAiJIAZAAQAgAAASARQAWAVAAAeQAAAfgVAUQgTASggAAgAgnA9IAQAAQAcAAARgRQASgSAAgaQAAgagUgTQgQgPgbAAIgQAAg");
	this.shape_24.setTransform(140.225,59.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVBFIAAiJIAJAAIAACBIAiAAIAAAIg");
	this.shape_25.setTransform(131.5,59.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgyAyQgVgVAAgdQAAgdAVgUQAWgVAcAAQAdAAAVAVQAWAUAAAdQAAAZgUAZIASATIgMAAIgNgPQgUARgZAAQgcAAgWgVgAgrgsQgTATAAAZQAAAaATASQATASAZAAQAVAAARgOIgigjIAMAAIAcAeQASgTAAgXQAAgZgSgTQgSgTgbAAQgZAAgSASg");
	this.shape_26.setTransform(119.975,59.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag+BUQgkgjAAgxQAAgwAkgjQAkgjAwAAQAsAAAhAeIAAAUQgNgQgWgKQgVgKgWAAQgqAAgfAgQggAgAAAqQAAAoAfAfQAPAPAUAIQATAJAUAAQAVAAAWgJQAWgKANgQIAAAUQgiAdgrAAQgwAAgkgjg");
	this.shape_27.setTransform(204.225,27.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhahVIAADHIgOAAIAAjqIDCDNIAAjLIAPAAIAADwg");
	this.shape_28.setTransform(177.1,28.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABSB4IgfhNIhlAAIgfBNIgPAAIBgjvIBhDvgAgtAeIBaAAIgthwg");
	this.shape_29.setTransform(151.125,27.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhUBVQgkgjAAgyQAAgwAkgjQAkgjAwAAQAxAAAkAjQAkAjAAAwQAAAtgiAmIAeAhIgUAAIgVgYQgiAbgqAAQgxAAgjgigAhJhJQggAfAAAqQAAAsAgAfQAfAeArAAQAjAAAegYIg6g8IAVAAIAvAzQAeggAAgmQAAgrgfgfQgfgggsAAQgqAAgfAfg");
	this.shape_30.setTransform(124.975,27.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(35));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AA0HBQgOgWgFgLQgTglAUgxQAXg6gDgZQgCgZgegKQhNgZgIgFQgygcAhgxQgfACgSgIQgbgNAKglQgmAeghALQgrAPgxgLQhDgNAChsQgcgDgPgEQgWgJgNgQQgSgvAAgrIAAgGQACiDB1hlQB2hnCbgBIAKAAQCeAACIA7QBpAuAqAzQAdAkACAiQATgDAQAJQA0AegfBjQgPAzgaAsQAgAyhMBZQhOBchuAgQhmAegXhdQgDgOgHg5QgEglgKgFQgJgEgWAPQgWAOgRAWQgtA5A8AQQBPAVARAoQAPAkgjA/QgZAqAQAoQAWA5gBAVQgGgVgNgWgAA5AIQAfAEADArQAHBdAMAXQAVAoBAggQBOgmBChRQBEhTg4gFQgTAAhbAhQhdAlgdABQgoACAVgoQATgkA8g6IBXhWQA4g1AmgWIhqAKQhbAJhmAXQhzAYgcAWIgCACQAsAmA8ADQA9gvAsgXQAYgNAegJQAKgEALAAIAbABQAZAEgJASQgRAmggAUQg3AjhngDIgDAAIgJAHQgMAKgFAPQgFAQANgDQAOgDgHAeQgHAfgWAcIgBABQAhgXAZAAIAHABgAg4gaIgvAnQgXAYgDAYQgDAcAlAAQANAAAQgEQAYgbAPgMQAMgYAEgNQAIgZgIgLQgHgKgLAAQgLAAgQALgAleAbQAlBLBRghQA7gYB/hrIAvgnQhIgFgXgcIgIgJIgkAnQgVAUgYAAIgKgBQgdgDANApQASA1gMAPQgQAVgsgXQgxgegSgHQgIgEgOgCQAAAsACAHgAFgjbQgkAYg7A1QhGA/gaAtQgYAqAdAAQALAAARgHQBTgsA5gKQA8gMAYAeQAdhRACg2QACg8gfgNQgEgCgGAAQgUAAgmAagAlcjGQgBAJABAoIgDBrQAaABANAEQASAEAKAMQAKANAOAIQANAGANABQAQAAACgMIgPg2QgKgmAjgEQAtgGAIgGQAMgGAOgiIAFgHQgQgHgtAOQhLAYgSADQgwAHAIgjQADgPAggaQgjgEgSgHIgGgBQgHAAgBAJgAmMkqQg6A/gEBZQgEBVArALQAWAGAYAAQABgRACgXIADgeQABgZgHhDIgMhogABGh1QBSgEAogbQAlgZgIgQQgIgQgkAMIgZAKQgZAKhJA4IARgBgAkVivQgcAVAOAMQANAMAggLQASgFA0gVQAwgPAZAKQA8giCeggQCcgfBeACQAAgKgIgPQgygKiDAaQhWARiWAoQhfAZhSACIgQAAgAACmaQgOAkgqAeQhEAxhoBQQBoAABdgcQBEgUB/geQBmgWA5gLQgzgsh8gzQg5gZhUgKQADAWgKAYgAjomwQgzAXg0AwQgTAegDAmQgCAiAKAVQAVATBIADIB+hcQBOg7AegpIAMghQADgKgBgHQgngDgvAAQhMAAg+Adg");
	mask.setTransform(48.8922,50.7);

	// Layer_1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(50.35,50.25,1,1,0,0,0,50.8,51.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(160.8,51,318,98.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];
// library properties:
lib.properties = {
	id: 'E2ADE86AB1CE4D0C920D442520F6B3C8',
	width: 318,
	height: 99,
	fps: 20,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E2ADE86AB1CE4D0C920D442520F6B3C8'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;