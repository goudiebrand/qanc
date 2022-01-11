(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
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
	this.shape.graphics.beginLinearGradientFill(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.918],254.4,121.3,-266.8,-115.6).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape.setTransform(0.0111,-0.0125,0.2341,0.2696);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#2D113F","#22356B","#0072FF","#64E220","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FBC60E","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.188,0.314,0.416,0.42,0.471,0.498,0.506,0.522,0.537,0.549,0.553,0.553,1],254.4,121.3,-266.8,-115.6).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape_1.setTransform(0.0111,-0.0125,0.2341,0.2696);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-50.3,98.30000000000001,100.6);


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
	this.shape.graphics.beginLinearGradientFill(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.918],254.4,-115.6,-266.8,121.3).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape.setTransform(0.0079,-0.0153,0.2341,0.2696);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#2D113F","#0000FF","#00B2FF","#4EC63C","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FBC60E","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.212,0.314,0.416,0.42,0.471,0.498,0.506,0.522,0.537,0.549,0.553,0.553,1],254.4,-115.6,-266.8,121.3).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape_1.setTransform(0.0079,-0.0153,0.2341,0.2696);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-50.3,98.30000000000001,100.6);


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
	this.shape.graphics.beginLinearGradientFill(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.918],254.4,-115.6,-266.8,121.3).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape.setTransform(0.0111,-0.0125,0.2341,0.2696);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#2D113F","#0000FF","#00B2FF","#4EC63C","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FBC60E","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.212,0.314,0.416,0.42,0.471,0.498,0.506,0.522,0.537,0.549,0.553,0.553,1],254.4,-115.6,-266.8,121.3).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape_1.setTransform(0.0111,-0.0125,0.2341,0.2696);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-50.3,98.30000000000001,100.6);


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
	this.shape.graphics.beginLinearGradientFill(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.918],254.4,121.3,-266.8,-115.6).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape.setTransform(0.0123,0.0296,0.2343,0.2695,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#2D113F","#22356B","#0064B9","#64E220","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FBC60E","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.192,0.314,0.416,0.42,0.471,0.498,0.506,0.522,0.537,0.549,0.553,0.553,1],254.4,121.3,-266.8,-115.6).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape_1.setTransform(0.0123,0.0296,0.2343,0.2695,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-50.2,98.5,100.5);


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
	this.shape.graphics.beginLinearGradientFill(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.918],254.4,121.3,-266.8,-115.6).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape.setTransform(0.0091,0.0353,0.2343,0.2695,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#2D113F","#22356B","#0064B9","#64E220","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FBC60E","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.192,0.314,0.416,0.42,0.471,0.498,0.506,0.522,0.537,0.549,0.553,0.553,1],254.4,121.3,-266.8,-115.6).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape_1.setTransform(0.0091,0.0353,0.2343,0.2695,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-50.2,98.4,100.5);


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
	this.shape.graphics.beginLinearGradientFill(["#2D113F","#22356B","#2D6494","#64B546","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FFC701","#FFB700","#EA1526","#EA0000"],[0.012,0.098,0.188,0.314,0.416,0.42,0.471,0.498,0.506,0.541,0.588,0.667,0.776,0.918],254.4,121.3,-266.8,-115.6).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape.setTransform(0.0239,0.0011,0.2342,0.2697,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-50.3,98.30000000000001,100.6);


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
	this.shape.graphics.beginLinearGradientFill(["#2D113F","#22356B","#2D6494","#64B546","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FFC701","#FFB700","#EA1526","#EA0000"],[0.012,0.098,0.188,0.314,0.416,0.42,0.471,0.498,0.506,0.541,0.588,0.667,0.776,0.918],254.4,121.3,-266.8,-115.6).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape.setTransform(0.0239,0.0011,0.2342,0.2697,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-50.3,98.30000000000001,100.6);


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
	this.shape.graphics.beginLinearGradientFill(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#FF0008","#FF0000"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.914],254.4,121.3,-266.8,-115.6).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape.setTransform(0.0091,0.0153,0.2343,0.2696,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#2D113F","#22356B","#2D6494","#64B546","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FBC60E","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.188,0.314,0.416,0.42,0.471,0.498,0.506,0.522,0.537,0.549,0.553,0.553,1],254.4,121.3,-266.8,-115.6).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape_1.setTransform(0.0091,0.0153,0.2343,0.2696,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-50.2,98.4,100.5);


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
	this.shape.graphics.beginLinearGradientFill(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.918],254.4,-115.6,-266.8,121.3).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape.setTransform(49.222,50.2932,0.2344,0.2697);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#2D113F","#22356B","#2D6494","#64B546","#99CA69","#9CCA67","#C3C94C","#D2C942","#DDC835","#F0C71D","#FBC60E","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.188,0.314,0.416,0.42,0.471,0.498,0.506,0.522,0.537,0.549,0.553,0.553,1],254.4,-115.6,-266.8,121.3).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape_1.setTransform(49.222,50.2932,0.2344,0.2697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,98.5,100.6), null);


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
	this.shape.graphics.beginLinearGradientFill(["rgba(0,0,0,0)","rgba(254,195,10,0)","#FEC30A","#F09F19","#E78822","#E48025","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.639,0.663,0.776,0.918],254.4,-115.6,-266.8,121.3).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape.setTransform(49.222,50.2932,0.2344,0.2697);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#2D113F","#22356B","#2D6494","#64C946","#99FF17","#9CFD18","#C3E625","#D2DD2A","#D3DC29","#EBD017","#FAC90D","#FFC609","#FEC30A","rgba(254,195,10,0)","rgba(0,0,0,0)"],[0.012,0.098,0.188,0.322,0.412,0.416,0.455,0.475,0.475,0.502,0.529,0.549,0.553,0.553,1],254.4,-115.6,-266.8,121.3).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape_1.setTransform(49.222,50.2932,0.2344,0.2697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,98.5,100.6), null);


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
	this.shape.graphics.beginLinearGradientFill(["rgba(0,0,0,0)","rgba(247,195,11,0)","#F7C30B","#ED9F19","#E68822","#E48025","#EA2F26","#AC1F24"],[0,0.573,0.573,0.612,0.643,0.663,0.776,0.918],254.4,-115.6,-266.8,121.3).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape.setTransform(49.222,50.2932,0.2344,0.2697);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#2D113F","#22356B","#2D6494","#64B546","#99E269","#A8E857","#C6F530","#D2FA21","#D3F920","#EBEB0E","#FAE204","#FFDF00","#F7C30B","rgba(247,195,11,0)","rgba(0,0,0,0)"],[0.012,0.098,0.188,0.314,0.416,0.427,0.463,0.482,0.482,0.506,0.529,0.549,0.573,0.573,1],254.4,-115.6,-266.8,121.3).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape_1.setTransform(49.222,50.2932,0.2344,0.2697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,98.5,100.6), null);


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
	this.shape.graphics.beginLinearGradientFill(["rgba(0,0,0,0)","rgba(255,216,0,0)","#FFD800","#FFB400","#FF9D00","#FF9500","#EA2F26","#AC1F24"],[0,0.553,0.553,0.6,0.635,0.659,0.776,0.918],254.4,-115.6,-266.8,121.3).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape.setTransform(49.222,50.2932,0.2344,0.2697);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#2D113F","#22356B","#2D6494","#64B546","#99CA69","#9CCA67","#C3C94C","#D2C942","#E1CF2C","#F2D514","#FCD905","#FFDA00","#FFD800","rgba(255,216,0,0)","rgba(0,0,0,0)"],[0.012,0.098,0.188,0.314,0.416,0.42,0.471,0.498,0.51,0.525,0.537,0.549,0.553,0.553,1],254.4,-115.6,-266.8,121.3).beginStroke().moveTo(-210,186.5).lineTo(-210,-186.5).lineTo(210,-186.5).lineTo(210,186.5).closePath();
	this.shape_1.setTransform(49.222,50.2932,0.2344,0.2697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._8, new cjs.Rectangle(0,0,98.5,100.6), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({alpha:1},4).wait(21));

	// Layer_11
	this.instance_1 = new lib.Tween15("synched",0);
	this.instance_1.setTransform(49.15,50.3);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween16("synched",0);
	this.instance_2.setTransform(49.15,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},26).to({state:[{t:this.instance_2}]},4).to({state:[]},4).to({state:[]},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({_off:true},4).wait(25));

	// Layer_1
	this.instance_3 = new lib.Tween17("synched",0);
	this.instance_3.setTransform(49.15,50.3,1,1,0,180,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).to({startPosition:0},4).to({_off:true},4).wait(25));

	// Layer_1
	this.instance_4 = new lib.Tween7("synched",0);
	this.instance_4.setTransform(49.2,50.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween8("synched",0);
	this.instance_5.setTransform(49.2,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},18).to({state:[{t:this.instance_5}]},4).to({state:[]},4).to({state:[]},9).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({_off:true,alpha:1},4).wait(33));

	// Layer_1
	this.instance_6 = new lib.Symbol5();
	this.instance_6.setTransform(49.2,50.3,1,1,0,0,0,49.2,50.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({alpha:1},4).to({_off:true},4).wait(33));

	// Layer_1
	this.instance_7 = new lib.Symbol4();
	this.instance_7.setTransform(49.2,50.3,1,1,0,0,0,49.2,50.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({alpha:1},4).to({_off:true},4).wait(37));

	// Layer_1
	this.instance_8 = new lib._8();
	this.instance_8.setTransform(49.2,50.3,1,1,0,0,0,49.2,50.3);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({alpha:1},4).to({_off:true},4).wait(41));

	// Layer_1
	this.instance_9 = new lib.Tween5("synched",0);
	this.instance_9.setTransform(49.15,50.3);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.setTransform(49.15,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[]},4).to({state:[]},25).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).to({_off:true,alpha:1},3).wait(49));

	// Layer_1
	this.instance_11 = new lib.Tween3("synched",0);
	this.instance_11.setTransform(49.1,50.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({startPosition:0},0).to({_off:true},1).wait(48));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,98.6,100.6);


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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.8,5).curveTo(-5.9,3,-5.9,0).curveTo(-5.9,-2.9,-3.8,-5).curveTo(-1.6,-7.1,1.3,-7.1).curveTo(4,-7.1,5.9,-5.3).lineTo(5.9,-4.1).curveTo(5.1,-5.1,3.8,-5.6).curveTo(2.5,-6.3,1.3,-6.3).curveTo(-1.3,-6.2,-3.2,-4.4).curveTo(-5,-2.4,-5,0.1).curveTo(-5,2.5,-3.2,4.4).curveTo(-1.2,6.3,1.3,6.3).curveTo(2.4,6.3,3.8,5.7).curveTo(5.2,5.1,5.9,4.2).lineTo(5.9,5.4).curveTo(3.8,7.1,1.3,7.1).curveTo(-1.6,7.1,-3.8,5).closePath();
	this.shape.setTransform(313.8,80.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.5,6.9).lineTo(-0.5,-6.9).lineTo(0.4,-6.9).lineTo(0.4,6.9).closePath();
	this.shape_1.setTransform(305.3,80.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.4,-5.1).lineTo(-5.4,6.8).lineTo(-6.2,6.8).lineTo(-6.2,-7.2).lineTo(5.4,5).lineTo(5.4,-7).lineTo(6.3,-7).lineTo(6.3,7.3).closePath();
	this.shape_2.setTransform(295.6,80.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.5,6.9).lineTo(-0.5,-6.9).lineTo(0.4,-6.9).lineTo(0.4,6.9).closePath();
	this.shape_3.setTransform(285.95,80.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.2,6.9).lineTo(-2.2,-6.9).lineTo(-1.3,-6.9).lineTo(-1.3,6.1).lineTo(2.2,6.1).lineTo(2.2,6.9).closePath();
	this.shape_4.setTransform(281.7,80.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.7,5).curveTo(-5.9,2.9,-5.9,0).curveTo(-5.9,-2.9,-3.8,-5).curveTo(-1.6,-7.1,1.3,-7.1).curveTo(4,-7.1,5.9,-5.3).lineTo(5.9,-4.1).curveTo(5.1,-5.1,3.8,-5.6).curveTo(2.6,-6.3,1.3,-6.3).curveTo(-1.3,-6.2,-3.2,-4.4).curveTo(-5,-2.4,-5,0.1).curveTo(-5,2.5,-3.2,4.4).curveTo(-1.2,6.3,1.3,6.3).curveTo(2.5,6.3,3.8,5.7).curveTo(5.1,5.1,5.9,4.2).lineTo(5.9,5.4).curveTo(3.8,7.1,1.3,7.1).curveTo(-1.6,7.1,-3.7,5).closePath();
	this.shape_5.setTransform(271.025,80.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.6,6.3).curveTo(-3.7,5.5,-4.2,4.2).lineTo(-3.4,3.8).curveTo(-2.5,6.3,-0,6.3).curveTo(1.3,6.3,2.4,5.3).curveTo(3.3,4.3,3.4,3).curveTo(3.4,2,2.4,1.2).curveTo(2,0.9,0.6,0.2).lineTo(-1.9,-1.1).curveTo(-3.4,-2,-3.4,-3.6).curveTo(-3.4,-5.2,-2.4,-6.1).curveTo(-1.4,-7.1,0.1,-7.1).curveTo(1.2,-7.1,2.1,-6.5).curveTo(3.1,-6,3.6,-5.2).lineTo(2.9,-4.6).curveTo(1.9,-6.2,0.1,-6.3).curveTo(-1,-6.2,-1.8,-5.5).curveTo(-2.5,-4.8,-2.5,-3.7).curveTo(-2.5,-2.7,-1.7,-2).curveTo(-1.1,-1.6,-0,-1).lineTo(2.7,0.3).curveTo(4.2,1.3,4.2,3.1).curveTo(4.2,4.8,2.9,6).curveTo(1.7,7.1,-0.1,7.1).curveTo(-1.5,7.1,-2.6,6.3).closePath();
	this.shape_6.setTransform(253.75,80.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.3,6.9).lineTo(-3.3,-6.9).lineTo(3.3,-6.9).lineTo(3.3,-6.1).lineTo(-2.4,-6.1).lineTo(-2.4,-1.1).lineTo(3.2,-1.1).lineTo(3.2,-0.3).lineTo(-2.4,-0.3).lineTo(-2.4,6.1).lineTo(3.3,6.1).lineTo(3.3,6.9).closePath();
	this.shape_7.setTransform(244.25,80.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.8,5).curveTo(-5.9,3,-5.9,0).curveTo(-5.9,-2.9,-3.8,-5).curveTo(-1.6,-7.1,1.3,-7.1).curveTo(4,-7.1,5.9,-5.3).lineTo(5.9,-4.1).curveTo(5.1,-5.1,3.8,-5.6).curveTo(2.6,-6.3,1.3,-6.3).curveTo(-1.3,-6.2,-3.2,-4.4).curveTo(-5,-2.4,-5,0.1).curveTo(-5,2.5,-3.2,4.4).curveTo(-1.2,6.3,1.3,6.3).curveTo(2.5,6.3,3.8,5.7).curveTo(5.1,5.1,5.9,4.2).lineTo(5.9,5.4).curveTo(3.7,7.1,1.3,7.1).curveTo(-1.6,7.1,-3.8,5).closePath();
	this.shape_8.setTransform(232.475,80.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.4,-5.1).lineTo(-5.4,6.8).lineTo(-6.3,6.8).lineTo(-6.3,-7.2).lineTo(5.3,5).lineTo(5.3,-7).lineTo(6.2,-7).lineTo(6.2,7.3).closePath();
	this.shape_9.setTransform(218.15,80.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.3,6.9).lineTo(-3.3,-6.9).lineTo(3.3,-6.9).lineTo(3.3,-6.1).lineTo(-2.4,-6.1).lineTo(-2.4,-1.1).lineTo(3.2,-1.1).lineTo(3.2,-0.3).lineTo(-2.4,-0.3).lineTo(-2.4,6.1).lineTo(3.3,6.1).lineTo(3.3,6.9).closePath();
	this.shape_10.setTransform(205.9,80.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.4,6.9).lineTo(-0.4,-6.9).lineTo(0.4,-6.9).lineTo(0.4,6.9).closePath();
	this.shape_11.setTransform(199.175,80.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.8,5).curveTo(-5.9,3,-5.9,0).curveTo(-5.9,-2.9,-3.8,-5).curveTo(-1.6,-7.1,1.3,-7.1).curveTo(4,-7.1,5.9,-5.3).lineTo(5.9,-4.1).curveTo(5.1,-5.1,3.9,-5.6).curveTo(2.6,-6.3,1.3,-6.3).curveTo(-1.3,-6.2,-3.2,-4.4).curveTo(-5,-2.4,-5,0.1).curveTo(-5.1,2.6,-3.1,4.4).curveTo(-1.2,6.3,1.3,6.3).curveTo(2.5,6.3,3.8,5.7).curveTo(5.2,5.1,5.9,4.2).lineTo(5.9,5.4).curveTo(3.8,7.1,1.3,7.1).curveTo(-1.6,7.1,-3.8,5).closePath();
	this.shape_12.setTransform(190.25,80.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.7,6.3).curveTo(-3.8,5.5,-4.2,4.2).lineTo(-3.5,3.8).curveTo(-2.4,6.3,-0.1,6.3).curveTo(1.2,6.3,2.3,5.3).curveTo(3.3,4.3,3.3,3).curveTo(3.3,2,2.4,1.2).curveTo(1.9,0.9,0.5,0.2).lineTo(-2,-1.1).curveTo(-3.4,-2,-3.4,-3.6).curveTo(-3.4,-5.2,-2.4,-6.1).curveTo(-1.4,-7.1,0.1,-7.1).curveTo(2.5,-7.1,3.5,-5.2).lineTo(2.9,-4.6).curveTo(1.8,-6.2,0,-6.3).curveTo(-1.1,-6.2,-1.8,-5.5).curveTo(-2.6,-4.8,-2.6,-3.7).curveTo(-2.6,-2.7,-1.7,-2).curveTo(-1.2,-1.6,-0.1,-1).lineTo(2.6,0.3).curveTo(4.2,1.4,4.2,3.1).curveTo(4.2,4.8,2.8,6).curveTo(1.6,7.1,-0.1,7.1).curveTo(-1.5,7.1,-2.7,6.3).closePath();
	this.shape_13.setTransform(178.7,80.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5,5).curveTo(-7.2,2.9,-7.2,0).curveTo(-7.2,-2.9,-5,-5).curveTo(-2.9,-7.1,0,-7.1).curveTo(3,-7.1,5.1,-5).curveTo(7.2,-2.9,7.2,0).curveTo(7.2,2.9,5.1,5).curveTo(3,7.1,0,7.1).curveTo(-2.9,7.1,-5,5).closePath().moveTo(-4.4,-4.4).curveTo(-6.3,-2.5,-6.3,0).curveTo(-6.3,2.5,-4.4,4.4).curveTo(-2.6,6.3,0,6.3).curveTo(2.6,6.3,4.5,4.4).curveTo(6.3,2.5,6.3,0).curveTo(6.3,-2.5,4.5,-4.4).curveTo(2.6,-6.3,0,-6.3).curveTo(-2.6,-6.3,-4.4,-4.4).closePath();
	this.shape_14.setTransform(165.825,80.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.4,6.9).lineTo(-2.1,0.4).lineTo(-2.6,0.4).lineTo(-2.6,6.9).lineTo(-3.4,6.9).lineTo(-3.4,-6.9).lineTo(-1.7,-6.9).curveTo(0.5,-6.9,1.4,-6.2).curveTo(2.8,-5.2,2.8,-3.3).curveTo(2.8,-1.5,1.7,-0.5).curveTo(0.7,0.4,-1.1,0.4).lineTo(3.4,6.9).closePath().moveTo(-2.6,-0.5).lineTo(-1.4,-0.5).curveTo(0.2,-0.5,1,-1.1).curveTo(2,-2,2,-3.3).curveTo(2,-5.2,0.5,-5.8).curveTo(-0.2,-6.1,-2,-6.1).lineTo(-2.6,-6.1).closePath();
	this.shape_15.setTransform(153.975,80.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.8,5.4).curveTo(-4.4,4.6,-4.6,3.6).lineTo(-4.7,1.6).lineTo(-4.7,-7).lineTo(-3.9,-7).lineTo(-3.9,1.4).curveTo(-3.8,4,-3.1,4.9).curveTo(-2.1,6.2,0,6.2).curveTo(2.1,6.2,3.1,4.9).curveTo(3.8,4,3.8,1.4).lineTo(3.8,-7).lineTo(4.7,-7).lineTo(4.7,1.6).lineTo(4.6,3.6).curveTo(4.4,4.6,3.8,5.4).curveTo(2.3,7,0,7).curveTo(-2.4,7,-3.8,5.4).closePath();
	this.shape_16.setTransform(143,80.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.3,6.9).lineTo(-3.3,-6.9).lineTo(3.3,-6.9).lineTo(3.3,-6.1).lineTo(-2.4,-6.1).lineTo(-2.4,-1.1).lineTo(3.1,-1.1).lineTo(3.1,-0.3).lineTo(-2.4,-0.3).lineTo(-2.4,6.1).lineTo(3.3,6.1).lineTo(3.3,6.9).closePath();
	this.shape_17.setTransform(132.4,80.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.4,-5.1).lineTo(-5.4,6.8).lineTo(-6.2,6.8).lineTo(-6.2,-7.2).lineTo(5.4,5).lineTo(5.4,-7).lineTo(6.3,-7).lineTo(6.3,7.3).closePath();
	this.shape_18.setTransform(119.9,80.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,6.1).curveTo(-5.7,5,-5.7,3.5).curveTo(-5.7,1.9,-4.3,0.5).curveTo(-3.6,-0.2,-1.5,-1.5).lineTo(-2.5,-2.9).curveTo(-2.9,-3.7,-3,-4.6).curveTo(-2.9,-5.6,-2.2,-6.4).curveTo(-1.3,-7.2,-0.3,-7.2).curveTo(0.9,-7.2,1.5,-6.5).curveTo(2.3,-5.7,2.2,-4.6).curveTo(2.3,-3.5,1.4,-2.7).curveTo(1,-2.1,-0.3,-1.2).lineTo(3.1,3.4).lineTo(4.8,1.5).lineTo(5.6,1.9).lineTo(3.6,4.1).lineTo(5.7,6.9).lineTo(4.7,6.9).lineTo(3,4.6).curveTo(-0,7.2,-2.1,7.2).curveTo(-3.6,7.2,-4.6,6.1).closePath().moveTo(-1.8,-0.2).curveTo(-3.2,0.6,-3.9,1.3).curveTo(-4.8,2.3,-4.8,3.4).curveTo(-4.8,4.6,-4.1,5.5).curveTo(-3.2,6.4,-2.1,6.3).curveTo(-0.4,6.3,2.5,3.9).lineTo(-1,-0.8).closePath().moveTo(-1.6,-5.8).curveTo(-2,-5.2,-2.1,-4.5).curveTo(-2,-3.8,-1.6,-3.1).lineTo(-0.8,-1.9).lineTo(0.6,-3).curveTo(1.4,-3.8,1.4,-4.7).curveTo(1.4,-5.3,0.9,-5.8).curveTo(0.4,-6.3,-0.3,-6.4).curveTo(-1.1,-6.3,-1.6,-5.8).closePath();
	this.shape_19.setTransform(212.15,59.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.9,6.9).lineTo(-4.9,-6.9).lineTo(-2.4,-6.9).curveTo(0.9,-6.9,2.7,-5.2).curveTo(4.9,-3.1,4.9,0).curveTo(4.9,3.1,2.8,5.1).curveTo(0.9,6.9,-2.4,6.9).closePath().moveTo(-4,6.1).lineTo(-2.4,6.1).curveTo(0.5,6.1,2.2,4.4).curveTo(4.1,2.6,4.1,0).curveTo(4.1,-2.8,2,-4.6).curveTo(0.4,-6.1,-2.4,-6.1).lineTo(-4,-6.1).closePath();
	this.shape_20.setTransform(194.775,59.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.2,6.9).lineTo(4.2,-0.2).lineTo(-4.2,-0.2).lineTo(-4.2,6.9).lineTo(-5.1,6.9).lineTo(-5.1,-6.9).lineTo(-4.2,-6.9).lineTo(-4.2,-1).lineTo(4.2,-1).lineTo(4.2,-6.9).lineTo(5.1,-6.9).lineTo(5.1,6.9).closePath();
	this.shape_21.setTransform(181.8,59.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.9,6.9).lineTo(-4.9,-6.9).lineTo(-2.4,-6.9).curveTo(0.8,-6.9,2.7,-5.2).curveTo(4.9,-3.1,4.9,0).curveTo(4.9,3.1,2.8,5.1).curveTo(0.9,6.9,-2.4,6.9).closePath().moveTo(-4,6.1).lineTo(-2.4,6.1).curveTo(0.5,6.1,2.2,4.4).curveTo(4,2.7,4,0).curveTo(4,-2.7,2,-4.6).curveTo(0.4,-6.1,-2.4,-6.1).lineTo(-4,-6.1).closePath();
	this.shape_22.setTransform(169.675,59.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.9,7.2).lineTo(3,2.6).lineTo(-3,2.6).lineTo(-4.9,7.2).lineTo(-5.8,7.2).lineTo(0,-7.1).lineTo(5.8,7.2).closePath().moveTo(-2.7,1.8).lineTo(2.7,1.8).lineTo(0,-4.9).closePath();
	this.shape_23.setTransform(157.375,59.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.9,6.9).lineTo(-4.9,-6.9).lineTo(-2.4,-6.9).curveTo(0.9,-6.9,2.7,-5.2).curveTo(4.9,-3.1,4.9,0).curveTo(4.9,3.1,2.8,5.1).curveTo(0.9,6.9,-2.4,6.9).closePath().moveTo(-4,6.1).lineTo(-2.4,6.1).curveTo(0.5,6.1,2.2,4.4).curveTo(4,2.6,4,0).curveTo(4,-2.7,2,-4.6).curveTo(0.4,-6.1,-2.4,-6.1).lineTo(-4,-6.1).closePath();
	this.shape_24.setTransform(140.225,59.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.2,6.9).lineTo(-2.2,-6.9).lineTo(-1.3,-6.9).lineTo(-1.3,6.1).lineTo(2.2,6.1).lineTo(2.2,6.9).closePath();
	this.shape_25.setTransform(131.5,59.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.1,5).curveTo(-7.2,2.9,-7.2,0).curveTo(-7.2,-3,-5.1,-5).curveTo(-2.9,-7.1,0,-7.1).curveTo(2.9,-7.1,5,-5).curveTo(7.2,-3,7.2,-0.1).curveTo(7.2,2.5,5.2,5).lineTo(7,6.9).lineTo(5.8,6.9).lineTo(4.5,5.4).curveTo(2.5,7.1,0,7.1).curveTo(-2.9,7.1,-5.1,5).closePath().moveTo(-4.4,-4.5).curveTo(-6.3,-2.6,-6.3,0).curveTo(-6.3,2.6,-4.4,4.4).curveTo(-2.5,6.2,0.1,6.2).curveTo(2.2,6.2,3.9,4.8).lineTo(0.5,1.3).lineTo(1.7,1.3).lineTo(4.5,4.3).curveTo(6.3,2.4,6.3,0.1).curveTo(6.3,-2.5,4.5,-4.4).curveTo(2.7,-6.3,0,-6.3).curveTo(-2.6,-6.3,-4.4,-4.5).closePath();
	this.shape_26.setTransform(119.975,59.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.3,8.4).curveTo(-9.9,4.9,-9.9,0).curveTo(-9.9,-4.9,-6.3,-8.4).curveTo(-2.7,-11.9,2.2,-11.9).curveTo(6.6,-11.9,9.9,-8.9).lineTo(9.9,-6.9).curveTo(8.6,-8.5,6.4,-9.5).curveTo(4.3,-10.5,2.1,-10.5).curveTo(-2.2,-10.5,-5.3,-7.3).curveTo(-8.5,-4.1,-8.5,0.2).curveTo(-8.5,4.2,-5.4,7.3).curveTo(-3.9,8.8,-1.9,9.6).curveTo(0.1,10.5,2.1,10.5).curveTo(4.2,10.5,6.4,9.6).curveTo(8.6,8.6,9.9,7).lineTo(9.9,9).curveTo(6.5,11.9,2.2,11.9).curveTo(-2.7,11.9,-6.3,8.4).closePath();
	this.shape_27.setTransform(204.225,27.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-9.1,-8.6).lineTo(-9.1,11.4).lineTo(-10.5,11.4).lineTo(-10.5,-12.1).lineTo(9,8.5).lineTo(9,-11.9).lineTo(10.5,-11.9).lineTo(10.5,12.2).closePath();
	this.shape_28.setTransform(177.1,28.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#FFFFFF").beginStroke().moveTo(8.2,12).lineTo(5.1,4.3).lineTo(-5.1,4.3).lineTo(-8.2,12).lineTo(-9.7,12).lineTo(0,-12).lineTo(9.7,12).closePath().moveTo(-4.6,3).lineTo(4.5,3).lineTo(0,-8.3).closePath();
	this.shape_29.setTransform(151.125,27.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.5,8.5).curveTo(-12.1,5,-12.1,0).curveTo(-12.1,-4.9,-8.5,-8.4).curveTo(-4.9,-11.9,0,-11.9).curveTo(4.9,-11.9,8.5,-8.4).curveTo(12.1,-4.9,12.1,-0.1).curveTo(12.1,4.5,8.7,8.3).lineTo(11.7,11.6).lineTo(9.7,11.6).lineTo(7.6,9.2).curveTo(4.2,11.9,0,11.9).curveTo(-5,11.9,-8.5,8.5).closePath().moveTo(-7.4,-7.4).curveTo(-10.6,-4.3,-10.6,0).curveTo(-10.6,4.4,-7.4,7.5).curveTo(-4.3,10.5,0.1,10.5).curveTo(3.6,10.5,6.6,8.1).lineTo(0.8,2.1).lineTo(2.9,2.1).lineTo(7.6,7.2).curveTo(10.6,4,10.6,0.2).curveTo(10.6,-4.2,7.5,-7.3).curveTo(4.4,-10.5,0,-10.5).curveTo(-4.3,-10.5,-7.4,-7.4).closePath();
	this.shape_30.setTransform(124.975,27.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(55));

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(5.2,44.9).curveTo(3.8,42.7,3.3,41.5).curveTo(1.4,37.9,3.4,33).curveTo(5.7,27.2,5.4,24.7).curveTo(5.2,22.2,2.2,21.2).curveTo(-5.6,18.7,-6.4,18.2).curveTo(-11.4,15.4,-8.1,10.5).curveTo(-11.2,10.7,-13,9.9).curveTo(-15.7,8.6,-14.7,4.9).curveTo(-18.5,7.9,-21.8,9).curveTo(-26.1,10.5,-31,9.4).curveTo(-37.7,8.1,-37.5,-2.8).curveTo(-40.3,-3.1,-41.8,-3.5).curveTo(-44,-4.4,-45.3,-6).curveTo(-47.1,-10.7,-47.1,-15).lineTo(-47.1,-15.6).curveTo(-46.9,-28.7,-35.2,-38.8).curveTo(-23.4,-49.1,-7.9,-49.2).lineTo(-6.9,-49.2).curveTo(9,-49.2,22.6,-43.3).curveTo(33.1,-38.7,37.3,-33.6).curveTo(40.2,-30,40.4,-26.6).curveTo(42.3,-26.9,43.9,-26).curveTo(49.1,-23,46,-13.1).curveTo(44.5,-8,41.9,-3.6).curveTo(45.1,1.5,37.5,10.4).curveTo(29.7,19.6,18.7,22.8).curveTo(8.5,25.8,6.2,16.5).curveTo(5.9,15.1,5.2,9.4).curveTo(4.8,5.7,3.8,5.2).curveTo(2.9,4.8,0.7,6.3).curveTo(-1.6,7.7,-3.3,9.9).curveTo(-7.8,15.6,-1.8,17.2).curveTo(6.2,19.3,7.9,23.3).curveTo(9.4,26.9,5.9,33.2).curveTo(3.4,37.4,5,41.4).curveTo(7.2,47.1,7.1,49.2).curveTo(6.5,47.1,5.2,44.9).closePath().moveTo(5.7,0.8).curveTo(8.8,1.2,9.1,5.5).curveTo(9.8,14.8,11,17.1).curveTo(13.1,21.1,19.5,17.9).curveTo(27.3,14.1,33.9,6).curveTo(40.7,-2.4,35.1,-2.9).curveTo(33.2,-2.9,24.1,0.5).curveTo(14.8,4.2,11.9,4.3).curveTo(7.9,4.5,10,0.5).curveTo(11.9,-3.2,17.9,-9).lineTo(26.6,-17.6).curveTo(32.2,-22.9,36,-25.1).lineTo(25.4,-24.1).curveTo(16.3,-23.2,6.1,-20.9).curveTo(-5.5,-18.5,-8.3,-16.3).lineTo(-8.5,-16.1).curveTo(-4.1,-12.3,2,-12).curveTo(8.1,-16.7,12.5,-19).curveTo(14.9,-20.3,17.9,-21.2).curveTo(18.9,-21.6,20,-21.6).lineTo(22.7,-21.5).curveTo(25.2,-21.1,24.3,-19.3).curveTo(22.6,-15.5,19.4,-13.5).curveTo(13.9,-10,3.6,-10.3).lineTo(3.3,-10.3).lineTo(2.4,-9.6).curveTo(1.2,-8.6,0.7,-7.1).curveTo(0.2,-5.5,1.5,-5.8).curveTo(2.9,-6.1,2.2,-3.1).curveTo(1.5,0.1,-0.8,2.9).lineTo(-0.9,3).curveTo(2.5,0.7,5,0.7).lineTo(5.7,0.8).closePath().moveTo(-5.7,-2.7).lineTo(-10.4,1.3).curveTo(-12.7,3.7,-13,6.1).curveTo(-13.3,8.9,-9.6,8.9).curveTo(-8.3,8.9,-6.7,8.5).curveTo(-4.3,5.8,-2.8,4.6).curveTo(-1.6,2.2,-1.2,0.9).curveTo(-0.4,-1.7,-1.2,-2.8).curveTo(-1.9,-3.8,-3,-3.8).curveTo(-4.1,-3.8,-5.7,-2.7).closePath().moveTo(-35.1,2.7).curveTo(-31.4,10.2,-23.3,6.9).curveTo(-17.4,4.5,-4.7,-6.3).lineTo(0.1,-10.2).curveTo(-7.2,-10.7,-9.5,-13.5).lineTo(-10.3,-14.4).lineTo(-13.9,-10.5).curveTo(-16,-8.5,-18.4,-8.5).lineTo(-19.4,-8.6).curveTo(-22.3,-8.9,-21,-4.8).curveTo(-19.2,0.6,-20.4,2.1).curveTo(-22,4.2,-26.4,1.9).curveTo(-31.3,-1.2,-33.1,-1.9).curveTo(-33.9,-2.3,-35.3,-2.5).curveTo(-35.3,2,-35.1,2.7).closePath().moveTo(35.2,-22).curveTo(31.6,-19.6,25.7,-14.3).curveTo(18.7,-8,16.1,-3.5).curveTo(13.7,0.8,16.6,0.8).curveTo(17.7,0.8,19.4,0.1).curveTo(27.7,-4.4,33.4,-5.4).curveTo(39.4,-6.6,41.8,-3.6).curveTo(44.7,-11.7,44.9,-17.1).curveTo(45.1,-23.1,42,-24.4).curveTo(41.6,-24.6,41,-24.6).curveTo(39,-24.6,35.2,-22).closePath().moveTo(-34.9,-19.9).curveTo(-35,-19,-34.9,-15).lineTo(-35.2,-4.3).curveTo(-32.6,-4.2,-31.3,-3.8).curveTo(-29.5,-3.4,-28.5,-2.2).curveTo(-27.5,-0.9,-26.1,-0.1).curveTo(-24.8,0.6,-23.5,0.7).curveTo(-21.9,0.7,-21.7,-0.6).lineTo(-23.2,-6).curveTo(-24.2,-9.8,-20.7,-10.2).curveTo(-16.2,-10.8,-15.4,-11.4).curveTo(-14.2,-12,-12.8,-15.4).lineTo(-12.3,-16.1).curveTo(-13.9,-16.8,-18.4,-15.4).curveTo(-25.9,-13,-27.7,-12.7).curveTo(-32.5,-12,-31.7,-15.5).curveTo(-31.4,-17,-28.2,-19.6).curveTo(-31.7,-20,-33.5,-20.7).lineTo(-34.1,-20.8).curveTo(-34.8,-20.8,-34.9,-19.9).closePath().moveTo(-39.7,-29.9).curveTo(-45.5,-23.6,-45.9,-14.7).curveTo(-46.3,-6.2,-42,-5.1).curveTo(-39.8,-4.5,-37.4,-4.5).curveTo(-37.3,-6.2,-37.1,-8.5).lineTo(-36.8,-11.5).curveTo(-36.7,-14,-37.4,-20.7).lineTo(-38.6,-31.1).closePath().moveTo(7,-11.8).curveTo(15.2,-12.2,19.2,-14.9).curveTo(22.9,-17.4,22.1,-19).curveTo(21.3,-20.6,17.7,-19.4).lineTo(15.2,-18.4).curveTo(12.7,-17.4,5.4,-11.8).lineTo(7.1,-11.9).closePath().moveTo(-27.8,-17.6).curveTo(-30.6,-15.5,-29.2,-14.3).curveTo(-27.9,-13.1,-24.7,-14.2).curveTo(-22.9,-14.7,-17.7,-16.8).curveTo(-12.9,-18.3,-10.4,-17.3).curveTo(-4.4,-20.7,11.5,-23.9).curveTo(27.1,-27,36.5,-26.8).curveTo(36.5,-27.8,35.7,-29.3).curveTo(30.7,-30.3,17.6,-27.7).curveTo(9,-26,-6.1,-22).curveTo(-15.6,-19.5,-23.8,-19.3).lineTo(-25.4,-19.3).closePath().moveTo(0.2,-41.1).curveTo(-1.3,-37.5,-5.5,-34.5).curveTo(-12.3,-29.6,-22.7,-21.6).curveTo(-12.3,-21.6,-3,-24.4).curveTo(3.9,-26.4,16.6,-29.4).curveTo(26.8,-31.6,32.5,-32.7).curveTo(27.4,-37.1,15,-42.2).curveTo(9.3,-44.7,0.9,-45.7).curveTo(1.2,-43.5,0.2,-41.1).closePath().moveTo(-23.3,-43.3).curveTo(-28.4,-41,-33.6,-36.2).curveTo(-35.5,-33.2,-35.8,-29.4).curveTo(-36,-26,-35,-23.9).curveTo(-32.9,-22,-25.7,-21.7).lineTo(-13.1,-30.9).curveTo(-5.3,-36.8,-2.3,-40.9).lineTo(-1.1,-44.2).curveTo(-0.8,-45.2,-0.9,-45.9).curveTo(-4.8,-46.2,-9.5,-46.2).curveTo(-17.1,-46.2,-23.3,-43.3).closePath();
	mask.setTransform(48.8922,50.7);

	// Layer_1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(50.35,50.25,1,1,0,0,0,50.8,51.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(160.8,51,158.89999999999998,48.599999999999994);
// library properties:
lib.properties = {
	id: 'E2ADE86AB1CE4D0C920D442520F6B3C8',
	width: 318,
	height: 99,
	fps: 20,
	color: "#0033CC",
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
