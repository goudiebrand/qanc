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
	this.shape.graphics.f("#FFFFFF").s().p("AiRCiIAAlDIB7AAQAzAAAmATQAmAVAVAlQAUAkAAAwQAAAvgUAlQgVAlgmAVQgmAVgzgBgAhCBcIAlAAQAtAAAZgYQAagYAAgsQAAgsgagZQgZgYgtAAIglAAg");
	this.shape.setTransform(121.625,77.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhRCMQgkgagDgxIBUAAQACATALAKQALALARAAQAPAAAJgIQAIgIAAgOQAAgNgIgIQgIgIgMgGIgggMQgfgKgTgKQgUgKgOgTQgOgTAAggQAAgdAPgVQAPgVAagLQAagMAhAAQA1AAAhAaQAfAaAFAtIhVAAQgDgRgJgJQgKgJgPAAQgOAAgIAHQgJAIAAAOQAAALAIAJQAIAHALAFIAgAOQAfAKAUALQAUAJAOATQAPAUAAAgQAAAagOAVQgNAWgZANQgaAMgkAAQg2AAgjgag");
	this.shape_1.setTransform(90.525,77.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABRChIgVg7Ih4AAIgVA7IhTAAIB4lCIBaAAIB3FCgAApArIgph3IgoB3IBRAAg");
	this.shape_2.setTransform(59.85,77.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhnCZQgYgOgMgXQgMgWAAgdQAAgoAVgZQAVgZAhgEIgFgJQgIgMgDgLQgEgMAAgNQAAgVALgSQALgSAVgLQAWgLAeAAQAoAAAXASQAXASAJAcQAGAVgBAYIhJAAIgBgRQgCgagXAAQgKAAgHAGQgGAGAAAJQAAAIAEAGIALARICgDSIhPAAIgmguIgIAMQgKARgSAKQgUAKgaAAQggAAgYgNgAhKAlQgKAJAAARQAAARALAKQALALAQAAQAQAAALgLQAKgKAAgPQAAgQgLgLQgMgKgQAAQgQAAgKAJg");
	this.shape_3.setTransform(18.575,77.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiRCjIAAlEIB7AAQAzAAAmATQAmAVAVAkQAUAmAAAvQAAAvgUAlQgVAlgmAVQgmAVgzAAgAhCBcIAlAAQAtAAAZgZQAagXAAgsQAAgsgagZQgZgYgtAAIglAAg");
	this.shape_4.setTransform(120.075,34.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA+CjIAAiIIh7AAIAACIIhPAAIAAlEIBPAAIAAB+IB7AAIAAh+IBPAAIAAFEg");
	this.shape_5.setTransform(86,34.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiRCjIAAlEIB7AAQAzAAAmATQAmAVAVAkQAUAmAAAvQAAAvgUAlQgVAlgmAVQgmAVgzAAgAhCBcIAlAAQAtAAAZgZQAagXAAgsQAAgsgagZQgZgYgtAAIglAAg");
	this.shape_6.setTransform(52.875,34.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABRCiIgVg8Ih4AAIgVA8IhTAAIB4lDIBZAAIB4FDgAApArIgph4IgoB4IBRAAg");
	this.shape_7.setTransform(18.8,34.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,147.9,111.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAgBwQgQgQAAgbQAAgcAQgQQAQgQAaAAQAaAAAQAQQAQAQAAAcQAAAbgQAQQgQAPgaAAQgaAAgQgPgAA8AzQgEAGAAAMQAAAKAEAHQAGAGAIAAQAJAAAEgGQAGgHAAgKQAAgMgGgGQgEgGgJAAQgIAAgGAGgAhfB8ICGj3IA6AAIiHD3gAhygZQgRgPAAgcQAAgcARgPQAQgQAaAAQAZAAARAQQAQAPAAAcQAAAcgQAPQgRAQgZAAQgaAAgQgQgAhWhVQgFAHAAAKQAAALAFAGQAFAGAIAAQAJAAAGgGQAEgGABgLQgBgKgEgHQgGgGgJAAQgIAAgFAGg");
	this.shape.setTransform(165.25,26.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKBbQgYghAAg6QAAg5AYgiQAYghAygBQAzABAYAhQAYAigBA5QABA6gYAhQgYAjgzAAQgyAAgYgjgAgegyQgIASAAAgQAAAhAIASQAHASAXAAQAXAAAIgSQAIgSAAghQAAgggIgSQgIgSgXAAQgXAAgHASg");
	this.shape_1.setTransform(140,26.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhGBgQgUghgBg7QAAhEAXggQAVghAyAAQAmAAAVAWQAUAXADAhIg4AAQgDgPgHgIQgHgHgNAAQgUAAgJASQgIATAAAnQAHgOAOgJQAOgHATgBQAjAAAUAWQAUATABAoQgBAZgJATQgLAUgUALQgUAKgbAAQg1AAgVgigAgWASQgLAJABAPQgBAQAKAKQAIALARgBQAQABAIgKQAJgIAAgRQAAgQgJgKQgIgIgQgBQgOAAgKAJg");
	this.shape_2.setTransform(117.9,26);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMAZIAAgxICZAAIAAAxg");
	this.shape_3.setTransform(88.675,26.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAgBwQgQgQAAgbQAAgcAQgQQARgQAZAAQAaAAAQAQQAQAQAAAcQAAAbgQAQQgQAPgaAAQgZAAgRgPgAA9AzQgGAGAAAMQAAAKAGAHQAEAGAJAAQAIAAAGgGQAEgHAAgKQAAgMgEgGQgGgGgIAAQgJAAgEAGgAhfB8ICGj3IA6AAIiGD3gAhzgZQgQgPAAgcQAAgcAQgPQARgQAaAAQAaAAAQAQQAQAPAAAcQAAAcgQAPQgQAQgaAAQgaAAgRgQgAhWhVQgFAHAAAKQAAALAFAGQAFAGAJAAQAIAAAFgGQAGgGAAgLQAAgKgGgHQgFgGgIAAQgJAAgFAGg");
	this.shape_4.setTransform(59.7,26.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhKBbQgXghgBg6QABg5AXgiQAXghAzgBQAzABAYAhQAYAigBA5QABA6gYAhQgYAjgzAAQgzAAgXgjgAgegyQgJASABAgQgBAhAJASQAHASAXAAQAXAAAIgSQAIgSAAghQAAgggIgSQgIgSgXAAQgXAAgHASg");
	this.shape_5.setTransform(34.45,26.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag9BtQgZgVgCgrIA6AAQABARAIAJQAIAKAQAAQANAAAHgIQAIgIAAgMQAAgfgsAAIgLAAIAAgvIALAAQAnAAAAgdQAAgMgHgHQgGgHgMAAQgLAAgIAJQgHAIgBAPIg7AAQACgoAXgVQAXgUAnAAQAaAAATAIQASAJAJAQQALAPgBAUQAAAYgMAPQgNAPgSADIAAACQAwAPAAAsQAAAVgKARQgJARgUAJQgSAJgbAAQgpAAgZgVg");
	this.shape_6.setTransform(12.35,25.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,181.5,53), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhmCRIAAkfIA8AAIAAAjQAHgRAQgKQAQgKAWAAQAYAAATAMQATAMALAWQALAXAAAfQAAAegLAWQgLAXgTAMQgTAMgYAAQgWAAgQgKQgQgLgHgRIAACAgAgehPQgNANAAAWQAAAVANANQALAMATAAQATAAALgLQAMgNAAgWQAAgXgMgMQgLgNgTAAQgTAAgLANg");
	this.shape.setTransform(134.725,33.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9BYQgTgMgLgXQgLgXAAgeQAAgeALgWQALgXATgMQAUgMAYAAQAUAAARAKQAQAKAIASIAAgkIA7AAIAADDIg7AAIAAgkQgIARgQALQgRAKgUAAQgYAAgUgMgAgegiQgLANAAAVQAAAXALAMQAMAMATABQASAAAMgNQANgNAAgWQAAgVgNgNQgMgNgSAAQgTAAgMANg");
	this.shape_1.setTransform(110,29);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdCCIAAkCIA7AAIAAECg");
	this.shape_2.setTransform(93.6,25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+BjIAAjDIA7AAIAAAlQALgSASgKQARgLAVAAIAABAIgRAAQgYAAgNALQgNAKAAAXIAABZg");
	this.shape_3.setTransform(81.75,28.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxBYQgXgMgMgXQgNgXAAgeQAAgeANgWQAMgXAXgMQAWgMAcAAQAdAAAWAMQAWAMAMAVQAMAWAAAbIgCAQIiGAAQABAWAKAJQAKAKAQAAQAMAAAJgGQAJgIACgKIBAAAQgEAVgNAQQgNARgUAJQgUAJgYAAQgcAAgWgMgAgagqQgKAKgCASIBLAAQABgSgLgKQgLgKgPAAQgQAAgLAKg");
	this.shape_4.setTransform(62.525,29);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkBiIhFjDIA/AAIAqCIIAriIIA/AAIhFDDg");
	this.shape_5.setTransform(40.675,28.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag+BuQgdgQgQgdQgRgdAAgkQAAgkARgdQAQgcAdgRQAcgQAiAAQAjAAAdAQQAcARARAcQAQAdAAAkQAAAkgRAdQgQAdgdAQQgcARgjAAQgiAAgcgRgAgugzQgRATAAAgQAAAgARATQASAUAcAAQAdAAARgUQASgTAAggQAAgggRgTQgSgTgdAAQgcAAgSATg");
	this.shape_6.setTransform(15.825,26.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,148.3,53), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#33CCFF").s().p("AvrPsQkDkEhilFQg6jFAAjeQAAjdA6jEQBilHEDkDQGgmgJLAAQJMAAGgGgQGgGgAAJLQAAJMmgGgQmgGfpMABQpLgBmgmfg");
	this.shape.setTransform(141.95,141.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,283.9,283.9), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0099").s().p("AvrPsQkDkEhhlFQg8jFAAjeQAAjdA8jEQBhlHEDkDQGgmgJLAAQJMAAGfGgQGhGgAAJLQAAJMmhGgQmfGfpMABQpLgBmgmfg");
	this.shape.setTransform(141.95,141.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,283.9,283.9), null);


// stage content:
(lib.overlap = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.instance = new lib.Symbol3();
	this.instance.setTransform(350,319,1,1,0,0,0,74.1,26.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({alpha:1},10).wait(80).to({alpha:0},10).wait(1));

	// Layer_4
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(350.05,282.75,1,1,0,0,0,90.8,26.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({alpha:1},10).wait(80).to({alpha:0},10).wait(1));

	// Layer_3
	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(349.8,210.35,1,1,0,0,0,73.9,55.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({alpha:1},10).wait(80).to({alpha:0},10).wait(1));

	// Layer_2
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(516.05,258.05,1,1,0,0,0,142,142);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.6484},24).to({x:405},18).to({scaleX:1.2607,scaleY:1.2607,x:418.2},17).wait(90).to({alpha:0},10).wait(1));

	// Layer_1
	this.instance_4 = new lib.Symbol2();
	this.instance_4.setTransform(182.1,258.05,1,1,0,0,0,142,142);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0.8984},24).to({x:304.05},18).to({scaleX:1.2607,scaleY:1.2607,x:290.9},17).wait(90).to({alpha:0},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(390.1,329.1,267.9,107.89999999999998);
// library properties:
lib.properties = {
	id: 'F82E133607E84623A67FA40109308B22',
	width: 700,
	height: 500,
	fps: 24,
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
an.compositions['F82E133607E84623A67FA40109308B22'] = {
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