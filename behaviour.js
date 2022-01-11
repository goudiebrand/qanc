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


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgsBGIAAiKIAqAAIAAAaQAHgNANgHQAMgIAPAAIAAAuIgMAAQgRABgJAGQgJAIAAAQIAAA/g");
	this.shape.setTransform(129.475,49.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3A3QgOgQAAgdIAAhQIArAAIAABLQAAAOAGAJQAIAHAMABQANAAAHgJQAIgIAAgQIAAhJIArAAIAACLIgrAAIAAgZQgHAMgLAIQgLAGgQABQgYAAgOgQg");
	this.shape_1.setTransform(114.95,49.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkA/QgRgJgJgQQgJgQAAgWQAAgVAJgQQAJgQARgJQAQgIAUAAQAVAAAQAIQARAJAJAQQAJAQAAAVQAAAWgJAQQgJAQgRAJQgQAIgVAAQgUAAgQgIgAgTgZQgJAJAAAQQAAARAJAJQAIAIALAAQANAAAIgIQAIgJAAgRQAAgQgIgJQgIgIgNAAQgLAAgIAIg");
	this.shape_2.setTransform(98.675,49.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUBlIAAiLIApAAIAACLgAgSg9QgHgGAAgKQAAgKAHgGQAIgHAKAAQALAAAIAHQAHAGAAAKQAAAJgHAHQgIAGgLAAQgKAAgIgGg");
	this.shape_3.setTransform(87.125,46.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZBGIgyiLIAtAAIAeBhIAfhhIAtAAIgyCLg");
	this.shape_4.setTransform(75.6,49.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrA/QgOgJgIgQQgIgQAAgWQAAgVAIgQQAIgQAOgJQANgIARAAQAPAAAMAHQALAHAGAMIAAgZIArAAIAACLIgrAAIAAgaQgGANgLAHQgMAHgPAAQgRAAgNgIgAgVgYQgIAJAAAPQAAAQAIAJQAIAJANAAQAOAAAIgJQAJgJAAgQQAAgPgJgJQgIgJgOAAQgNAAgIAJg");
	this.shape_5.setTransform(58.875,49.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcBdIAAhMQAAgOgIgIQgHgHgNAAQgLAAgIAIQgIAHAAAQIAABKIgqAAIAAi5IAqAAIAABHQAGgMAMgIQALgGAQgBQAYAAAOAQQAOAQAAAbIAABSg");
	this.shape_6.setTransform(42.375,47);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjA/QgQgJgJgQQgJgQAAgWQAAgVAJgQQAJgQAQgJQAQgIAUAAQAUAAAQAIQAQAIAIAQQAJAPAAAUIgBALIhgAAQABAPAHAHQAHAHAMAAQAIAAAGgEQAHgFABgIIAuAAQgDAPgJAMQgJALgPAHQgOAGgRAAQgUAAgQgIgAAbgJQAAgOgIgHQgHgHgLAAQgLAAgIAHQgIAHgBAOIA2AAIAAAAg");
	this.shape_7.setTransform(26.125,49.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhFBZIAAixIBPAAQAbAAAOANQAPAMAAAVQAAAQgIAKQgJAMgOADQAQACAKAMQAJAMAAAQQAAAWgPANQgPAMgcABgAgbA1IAeAAQAXAAAAgTQAAgJgGgGQgGgFgLAAIgeAAgAgbgPIAbAAQAXAAAAgTQAAgTgXAAIgbAAg");
	this.shape_8.setTransform(10.625,47.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1BnIAghIIg6iFIAwAAIAgBWIAfhWIAwAAIhWDNg");
	this.shape_9.setTransform(112.225,24.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsBHIAAiLIAqAAIAAAaQAHgNANgHQAMgIAPAAIAAAuIgMAAQgRABgJAGQgJAIAAAQIAABAg");
	this.shape_10.setTransform(99.475,21.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkA/QgRgJgJgQQgJgQAAgWQAAgVAJgQQAJgQARgJQAQgIAUAAQAVAAAQAIQARAJAJAQQAJAQAAAVQAAAWgJAQQgJAQgRAJQgQAIgVAAQgUAAgQgIgAgTgZQgJAJAAAQQAAARAJAJQAIAIALAAQANAAAIgIQAIgJAAgRQAAgQgIgJQgIgIgNAAQgLAAgIAIg");
	this.shape_11.setTransform(85.475,21.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgmA7QgRgMgEgYIApAAQABAJAHAFQAGAFAKAAQAHAAAEgEQADgDAAgGQAAgHgGgDQgHgDgPgEQgPgDgKgDQgKgEgHgIQgIgIAAgOQAAgTAPgMQAOgLAaAAQAZAAAQANQAQANAEAWIgoAAQgCgJgGgFQgGgEgIAAQgHAAgEADQgEADAAAGQAAAGAHADQAHADANAEIAbAHQAKAEAHAIQAIAJAAAOQAAANgGAJQgHAJgMAFQgMAFgRAAQgcAAgQgMg");
	this.shape_12.setTransform(70.625,21.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcBHIAAhMQAAgNgIgJQgHgHgNAAQgLAAgIAIQgIAIAAAQIAABJIgqAAIAAiLIAqAAIAAAZQAGgMAMgIQALgHAQAAQAYABAOAQQAOAPAAAdIAABQg");
	this.shape_13.setTransform(55.275,21.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjA/QgQgJgJgQQgJgQAAgWQAAgVAJgQQAJgQAQgJQAQgIAUAAQAUAAAQAIQAQAIAIAQQAJAPAAAUIgBALIhgAAQABAPAHAHQAHAHAMAAQAIAAAGgEQAHgFABgIIAuAAQgDAPgJAMQgJALgPAHQgOAGgRAAQgUAAgQgIgAAbgJQAAgOgIgHQgHgHgLAAQgLAAgIAHQgIAHgBAOIA2AAIAAAAg");
	this.shape_14.setTransform(39.025,21.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgrBMQgUgOgBgaIAtAAQABAKAGAFQAGAHAIAAQAJAAAFgGQAFgEgBgHQABgHgFgEQgEgFgGgDIgSgHQgQgFgLgGQgLgEgIgLQgHgLAAgRQAAgQAIgLQAIgLAOgHQAOgFATgBQAcAAASAOQAQAOADAZIguAAQgCgIgFgGQgFgFgHAAQgIAAgFAEQgEAEAAAIQAAAGAEAEQAEAFAGADIARAHQARAFALAGQALAEAHALQAIALAAARQAAAOgHAMQgHAMgOAHQgOAHgUAAQgcAAgTgPg");
	this.shape_15.setTransform(23.8,19.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,136.4,67), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgmA7QgRgMgEgYIApAAQABAJAHAFQAGAFAKAAQAHAAAEgEQADgDAAgGQAAgHgGgDQgHgDgPgEQgPgDgKgDQgKgEgHgIQgIgIAAgOQAAgTAPgMQAOgLAaAAQAZAAAQANQAQANAEAWIgoAAQgCgJgGgFQgGgEgIAAQgHAAgEADQgEADAAAGQAAAGAHADQAHADANAEIAbAHQAKAEAHAIQAIAJAAAOQAAANgGAJQgHAJgMAFQgMAFgRAAQgcAAgQgMg");
	this.shape.setTransform(215.075,21.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjA/QgQgJgJgQQgJgQAAgWQAAgVAJgQQAJgQAQgJQAQgIAUAAQAUAAAQAIQAQAIAIAQQAJAPAAAUIgBALIhgAAQABAPAHAHQAHAHAMAAQAIAAAGgEQAHgFABgIIAuAAQgDAPgJAMQgJALgPAHQgOAGgRAAQgUAAgQgIgAAbgJQAAgOgIgHQgHgHgLAAQgLAAgIAHQgIAHgBAOIA2AAIAAAAg");
	this.shape_1.setTransform(200.375,21.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBlIAAiLIApAAIAACLgAgSg9QgHgGAAgKQAAgKAHgGQAIgHAKAAQALAAAIAHQAHAGAAAKQAAAJgHAHQgIAGgLAAQgKAAgIgGg");
	this.shape_2.setTransform(189.075,18.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaBXQgZAAgMgMQgOgNgBgbIAAgzIgSAAIAAgkIASAAIAAgiIArAAIAAAiIAbAAIAAAkIgbAAIAAAzQAAAJADADQADADAIAAIAOAAIAAAlg");
	this.shape_3.setTransform(180.05,19.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUBdIAAi5IApAAIAAC5g");
	this.shape_4.setTransform(171.575,19);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3A3QgPgQAAgcIAAhQIArAAIAABKQAAAOAIAJQAHAHAMABQAMAAAIgJQAHgIAAgQIAAhIIAsAAIAACKIgsAAIAAgZQgFAMgNAIQgKAGgQABQgYAAgOgQg");
	this.shape_5.setTransform(159.45,21.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiA/QgQgJgJgQQgJgQAAgWQAAgVAJgQQAJgQAQgJQAQgIATAAQAbAAASAOQASAPAFAaIgtAAQgCgJgGgFQgGgFgKAAQgKAAgIAJQgHAJAAAQQAAARAHAJQAIAJAKAAQAKAAAGgFQAGgFACgJIAtAAQgFAagSAPQgSAOgbAAQgTAAgQgIg");
	this.shape_6.setTransform(143.475,21.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUBlIAAiLIApAAIAACLgAgSg9QgHgGAAgKQAAgKAHgGQAIgHAKAAQALAAAIAHQAHAGAAAKQAAAJgHAHQgIAGgLAAQgKAAgIgGg");
	this.shape_7.setTransform(132.225,18.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZBiIAAhnIgQAAIAAgkIAQAAIAAgCQAAgaAPgNQAPgOAcgBIAJAAIAAAlIgEAAQgLAAgFAFQgFAEAAAKIAZAAIAAAkIgZAAIAABng");
	this.shape_8.setTransform(123.975,18.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZBiIAAhnIgQAAIAAgkIAQAAIAAgCQAAgaAPgNQAPgOAcgBIAJAAIAAAlIgEAAQgLAAgFAFQgFAEAAAKIAZAAIAAAkIgZAAIAABng");
	this.shape_9.setTransform(114.775,18.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUBlIAAiLIApAAIAACLgAgSg9QgHgGAAgKQAAgKAHgGQAIgHAKAAQALAAAIAHQAHAGAAAKQAAAJgHAHQgIAGgLAAQgKAAgIgGg");
	this.shape_10.setTransform(106.625,18.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhOBZIAAixIBCAAQAcABAUAKQAVALALAVQALAUAAAZQAAAagLAUQgLAUgVAMQgVAKgbABgAgkAzIAVAAQAYAAANgOQAOgNAAgYQAAgXgOgNQgNgOgYAAIgVAAg");
	this.shape_11.setTransform(94.125,19.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUBdIAAi5IApAAIAAC5g");
	this.shape_12.setTransform(76.125,19);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrA/QgOgJgIgQQgIgQAAgWQAAgVAIgQQAIgQAOgJQANgIARAAQAPAAAMAHQALAHAGAMIAAgZIArAAIAACLIgrAAIAAgaQgGANgLAHQgMAHgPAAQgRAAgNgIgAgVgYQgIAJAAAPQAAAQAIAJQAIAJANAAQAOAAAIgJQAJgJAAgQQAAgPgJgJQgIgJgOAAQgNAAgIAJg");
	this.shape_13.setTransform(63.675,21.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUBlIAAiLIApAAIAACLgAgSg9QgHgGAAgKQAAgKAHgGQAIgHAKAAQALAAAIAHQAHAGAAAKQAAAJgHAHQgIAGgLAAQgKAAgIgGg");
	this.shape_14.setTransform(51.975,18.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiA/QgQgJgJgQQgJgQAAgWQAAgVAJgQQAJgQAQgJQAQgIATAAQAbAAASAOQASAPAFAaIgtAAQgCgJgGgFQgGgFgKAAQgKAAgIAJQgHAJAAAQQAAARAHAJQAIAJAKAAQAKAAAGgFQAGgFACgJIAtAAQgFAagSAPQgSAOgbAAQgTAAgQgIg");
	this.shape_15.setTransform(40.675,21.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkA/QgRgJgJgQQgJgQAAgWQAAgVAJgQQAJgQARgJQAQgIAUAAQAVAAAQAIQARAJAJAQQAJAQAAAVQAAAWgJAQQgJAQgRAJQgQAIgVAAQgUAAgQgIgAgTgZQgJAJAAAQQAAARAJAJQAIAIALAAQANAAAIgIQAIgJAAgRQAAgQgIgJQgIgIgNAAQgLAAgIAIg");
	this.shape_16.setTransform(25.025,21.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgrBMQgUgOgCgaIAuAAQABAKAGAFQAGAHAJAAQAIAAAFgGQAEgEABgHQgBgHgEgEQgEgFgHgDIgRgHQgRgFgKgGQgKgEgJgLQgHgLAAgRQAAgQAIgLQAIgLAOgHQAOgFASgBQAdAAARAOQASAOACAZIguAAQgCgIgEgGQgGgFgIAAQgHAAgEAEQgFAEAAAIQAAAGAEAEQAEAFAGADIASAHQAQAFALAGQALAEAHALQAIALAAARQAAAOgHAMQgHAMgOAHQgOAHgUAAQgcAAgTgPg");
	this.shape_17.setTransform(9.55,19.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,224.2,39), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAcBHIAAhMQAAgOgIgHQgHgIgNAAQgLAAgIAIQgIAIAAAQIAABJIgqAAIAAiLIAqAAIAAAZQAGgMAMgHQALgIAQAAQAYABAOAQQAOAQAAAcIAABQg");
	this.shape.setTransform(158.025,56.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkA/QgRgJgJgQQgJgQAAgWQAAgVAJgQQAJgQARgJQAQgIAUAAQAVAAAQAIQARAJAJAQQAJAQAAAVQAAAWgJAQQgJAQgRAJQgQAIgVAAQgUAAgQgIgAgTgZQgJAJAAAQQAAARAJAJQAIAIALAAQANAAAIgIQAIgJAAgRQAAgQgIgJQgIgIgNAAQgLAAgIAIg");
	this.shape_1.setTransform(141.525,56.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBlIAAiLIApAAIAACLgAgSg9QgHgGAAgKQAAgKAHgGQAIgHAKAAQALAAAIAHQAHAGAAAKQAAAJgHAHQgIAGgLAAQgKAAgIgGg");
	this.shape_2.setTransform(129.975,53.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZBXQgYAAgNgMQgOgNAAgbIAAgzIgSAAIAAgkIASAAIAAgiIAqAAIAAAiIAcAAIAAAkIgcAAIAAAzQABAJADADQAEADAHAAIAOAAIAAAlg");
	this.shape_3.setTransform(120.95,54.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiA/QgQgJgJgQQgJgQAAgWQAAgVAJgQQAJgQAQgJQAQgIATAAQAbAAASAOQASAPAFAaIgtAAQgCgJgGgFQgGgFgKAAQgKAAgIAJQgHAJAAAQQAAARAHAJQAIAJAKAAQAKAAAGgFQAGgFACgJIAtAAQgFAagSAPQgSAOgbAAQgTAAgQgIg");
	this.shape_4.setTransform(108.375,56.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcBHIAAhMQAAgOgIgHQgHgIgNAAQgLAAgIAIQgIAIAAAQIAABJIgqAAIAAiLIAqAAIAAAZQAGgMAMgHQALgIAQAAQAYABAOAQQAOAQAAAcIAABQg");
	this.shape_5.setTransform(92.325,56.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag3A3QgPgRAAgbIAAhQIArAAIAABKQAAAOAIAJQAHAHAMABQAMAAAIgJQAHgJAAgOIAAhJIArAAIAACKIgrAAIAAgaQgFANgNAIQgKAGgQAAQgYAAgOgPg");
	this.shape_6.setTransform(75.3,56.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZBiIAAhnIgQAAIAAgkIAQAAIAAgCQAAgZAPgOQAPgOAcgBIAJAAIAAAlIgEAAQgLAAgFAFQgFAEAAAKIAZAAIAAAkIgZAAIAABng");
	this.shape_7.setTransform(62.375,53.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmA7QgRgMgEgYIApAAQABAJAHAFQAGAFAKAAQAHAAAEgEQADgDAAgGQAAgHgGgDQgHgDgPgEQgPgDgKgDQgKgEgHgIQgIgIAAgOQAAgTAPgMQAOgLAaAAQAZAAAQANQAQANAEAWIgoAAQgCgJgGgFQgGgEgIAAQgHAAgEADQgEADAAAGQAAAGAHADQAHADANAEIAbAHQAKAEAHAIQAIAJAAAOQAAANgGAJQgHAJgMAFQgMAFgRAAQgcAAgQgMg");
	this.shape_8.setTransform(50.925,56.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1BnIAghIIg6iFIAwAAIAgBWIAfhWIAwAAIhWDNg");
	this.shape_9.setTransform(36.025,59.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhOBZIAAixIBCAAQAcABAUAKQAVALALAVQALAUAAAZQAAAagLAUQgLAUgVAMQgVAKgbABgAgkAzIAVAAQAYAAANgOQAOgNAAgYQAAgXgOgNQgNgOgYAAIgVAAg");
	this.shape_10.setTransform(19.225,54.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgjA/QgQgJgJgQQgJgQAAgWQAAgVAJgQQAJgQAQgJQAQgIAUAAQAUAAAQAIQAQAIAIAQQAJAPAAAUIgBALIhgAAQABAPAHAHQAHAHAMAAQAIAAAGgEQAHgFABgIIAuAAQgDAPgJAMQgJALgPAHQgOAGgRAAQgUAAgQgIgAAbgJQAAgOgIgHQgHgHgLAAQgLAAgIAHQgIAHgBAOIA2AAIAAAAg");
	this.shape_11.setTransform(142.775,32.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaBGIgxiLIAuAAIAdBhIAfhhIAtAAIgyCLg");
	this.shape_12.setTransform(127.15,32.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUBlIAAiLIApAAIAACLgAgSg9QgHgGAAgKQAAgKAHgGQAIgHAKAAQALAAAIAHQAHAGAAAKQAAAJgHAHQgIAGgLAAQgKAAgIgGg");
	this.shape_13.setTransform(115.675,29.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAZBXQgYAAgNgMQgNgNAAgbIAAgzIgTAAIAAgkIATAAIAAgiIApAAIAAAiIAcAAIAAAkIgcAAIAAAzQAAAJAEADQADADAIAAIAOAAIAAAlg");
	this.shape_14.setTransform(106.65,30.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3A2QgOgPAAgdIAAhQIArAAIAABMQAAANAGAIQAIAJAMAAQANAAAHgJQAIgJAAgPIAAhJIAqAAIAACLIgqAAIAAgZQgHAMgLAIQgLAHgQAAQgYgBgOgQg");
	this.shape_15.setTransform(93.25,32.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgiA/QgQgJgJgQQgJgQAAgWQAAgVAJgQQAJgQAQgJQAQgIATAAQAbAAASAOQASAPAFAaIgtAAQgCgJgGgFQgGgFgKAAQgKAAgIAJQgHAJAAAQQAAARAHAJQAIAJAKAAQAKAAAGgFQAGgFACgJIAtAAQgFAagSAPQgSAOgbAAQgTAAgQgIg");
	this.shape_16.setTransform(77.275,32.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgjA/QgQgJgJgQQgJgQAAgWQAAgVAJgQQAJgQAQgJQAQgIAUAAQAUAAAQAIQAQAIAIAQQAJAPAAAUIgBALIhgAAQABAPAHAHQAHAHAMAAQAIAAAGgEQAHgFABgIIAuAAQgDAPgJAMQgJALgPAHQgOAGgRAAQgUAAgQgIgAAbgJQAAgOgIgHQgHgHgLAAQgLAAgIAHQgIAHgBAOIA2AAIAAAAg");
	this.shape_17.setTransform(61.875,32.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaBGIgbgoIgXAoIgvAAIAuhIIgwhDIAwAAIAbAoIAXgoIAvAAIgvBGIAxBFg");
	this.shape_18.setTransform(46.625,32.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag2BYIAAiwIBtAAIAAAjIhCAAIAAAlIA7AAIAAAfIg7AAIAAAnIBCAAIAAAig");
	this.shape_19.setTransform(32.65,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(7.7,11,160.8,63), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAcBHIAAhMQAAgNgIgJQgHgHgNAAQgLAAgIAIQgIAIAAAQIAABJIgqAAIAAiLIAqAAIAAAZQAGgMAMgIQALgHAQAAQAYABAOAQQAOAPAAAdIAABQg");
	this.shape.setTransform(137.975,21.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkA/QgRgJgJgQQgJgQAAgWQAAgVAJgQQAJgQARgJQAQgIAUAAQAVAAAQAIQARAJAJAQQAJAQAAAVQAAAWgJAQQgJAQgRAJQgQAIgVAAQgUAAgQgIgAgTgZQgJAJAAAQQAAARAJAJQAIAIALAAQANAAAIgIQAIgJAAgRQAAgQgIgJQgIgIgNAAQgLAAgIAIg");
	this.shape_1.setTransform(121.475,21.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBlIAAiLIApAAIAACLgAgSg9QgHgGAAgKQAAgKAHgGQAIgHAKAAQALAAAIAHQAHAGAAAKQAAAJgHAHQgIAGgLAAQgKAAgIgGg");
	this.shape_2.setTransform(109.925,18.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZBXQgYAAgNgMQgNgNAAgbIAAgzIgTAAIAAgkIATAAIAAgiIApAAIAAAiIAdAAIAAAkIgdAAIAAAzQAAAJAEADQAEADAHAAIAOAAIAAAlg");
	this.shape_3.setTransform(100.9,19.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcBHIAAhMQAAgNgIgJQgHgHgNAAQgLAAgIAIQgIAIAAAQIAABJIgqAAIAAiLIAqAAIAAAZQAGgMAMgIQALgHAQAAQAYABAOAQQAOAPAAAdIAABQg");
	this.shape_4.setTransform(87.625,21.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjA/QgQgJgJgQQgJgQAAgWQAAgVAJgQQAJgQAQgJQAQgIAUAAQAUAAAQAIQAQAIAIAQQAJAPAAAUIgBALIhgAAQABAPAHAHQAHAHAMAAQAIAAAGgEQAHgFABgIIAuAAQgDAPgJAMQgJALgPAHQgOAGgRAAQgUAAgQgIgAAbgJQAAgOgIgHQgHgHgLAAQgLAAgIAHQgIAHgBAOIA2AAIAAAAg");
	this.shape_5.setTransform(71.375,21.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBXQgZAAgNgMQgOgNABgbIAAgzIgTAAIAAgkIATAAIAAgiIAqAAIAAAiIAcAAIAAAkIgcAAIAAAzQAAAJADADQAEADAHAAIAOAAIAAAlg");
	this.shape_6.setTransform(58.25,19.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZBXQgYAAgMgMQgPgNAAgbIAAgzIgSAAIAAgkIASAAIAAgiIAqAAIAAAiIAcAAIAAAkIgcAAIAAAzQABAJADADQAEADAHAAIAOAAIAAAlg");
	this.shape_7.setTransform(47.95,19.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrA/QgOgJgIgQQgIgQAAgWQAAgVAIgQQAIgQAOgJQANgIARAAQAPAAAMAHQALAHAGAMIAAgZIArAAIAACLIgrAAIAAgaQgGANgLAHQgMAHgPAAQgRAAgNgIgAgVgYQgIAJAAAPQAAAQAIAJQAIAJANAAQAOAAAIgJQAJgJAAgQQAAgPgJgJQgIgJgOAAQgNAAgIAJg");
	this.shape_8.setTransform(34.225,21.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAcBHIAAhMQAAgNgIgJQgHgHgNAAQgLAAgIAIQgIAIAAAQIAABJIgqAAIAAiLIAqAAIAAAZQAGgMAMgIQALgHAQAAQAYABAOAQQAOAPAAAdIAABQg");
	this.shape_9.setTransform(17.725,21.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUBZIAAixIApAAIAACxg");
	this.shape_10.setTransform(5.625,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,148.6,39), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Ag1BnIAghIIg6iFIAwAAIAgBWIAfhWIAwAAIhWDNg");
	this.shape.setTransform(170.325,24.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaBXQgZAAgMgMQgOgNgBgbIAAgzIgSAAIAAgkIASAAIAAgiIArAAIAAAiIAcAAIAAAkIgcAAIAAAzQgBAJAEADQADADAIAAIAOAAIAAAlg");
	this.shape_1.setTransform(157,19.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBlIAAiLIApAAIAACLgAgSg9QgHgGAAgKQAAgKAHgGQAIgHAKAAQALAAAIAHQAHAGAAAKQAAAJgHAHQgIAGgLAAQgKAAgIgGg");
	this.shape_2.setTransform(148.525,18.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZBGIgyiLIAtAAIAeBhIAehhIAuAAIgxCLg");
	this.shape_3.setTransform(137,21.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUBlIAAiLIApAAIAACLgAgSg9QgHgGAAgKQAAgKAHgGQAIgHAKAAQALAAAIAHQAHAGAAAKQAAAJgHAHQgIAGgLAAQgKAAgIgGg");
	this.shape_4.setTransform(125.525,18.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaBXQgZAAgMgMQgOgNgBgbIAAgzIgSAAIAAgkIASAAIAAgiIArAAIAAAiIAcAAIAAAkIgcAAIAAAzQgBAJAEADQADADAIAAIAOAAIAAAlg");
	this.shape_5.setTransform(116.5,19.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiA/QgQgJgJgQQgJgQAAgWQAAgVAJgQQAJgQAQgJQAQgIATAAQAbAAASAOQASAPAFAaIgtAAQgCgJgGgFQgGgFgKAAQgKAAgIAJQgHAJAAAQQAAARAHAJQAIAJAKAAQAKAAAGgFQAGgFACgJIAtAAQgFAagSAPQgSAOgbAAQgTAAgQgIg");
	this.shape_6.setTransform(103.925,21.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrA/QgOgJgIgQQgIgQAAgWQAAgVAIgQQAIgQAOgJQANgIARAAQAPAAAMAHQALAHAGAMIAAgZIArAAIAACLIgrAAIAAgaQgGANgLAHQgMAHgPAAQgRAAgNgIgAgVgYQgIAJAAAPQAAAQAIAJQAIAJANAAQAOAAAIgJQAJgJAAgQQAAgPgJgJQgIgJgOAAQgNAAgIAJg");
	this.shape_7.setTransform(87.425,21.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsBHIAAiLIAqAAIAAAaQAHgNANgHQAMgIAPAAIAAAuIgMAAQgRABgJAGQgJAIAAAQIAABAg");
	this.shape_8.setTransform(74.475,21.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjA/QgQgJgJgQQgJgQAAgWQAAgVAJgQQAJgQAQgJQAQgIAUAAQAUAAAQAIQAQAIAIAQQAJAPAAAUIgBALIhgAAQABAPAHAHQAHAHAMAAQAIAAAGgEQAHgFABgIIAuAAQgDAPgJAMQgJALgPAHQgOAGgRAAQgUAAgQgIgAAbgJQAAgOgIgHQgHgHgLAAQgLAAgIAHQgIAHgBAOIA2AAIAAAAg");
	this.shape_9.setTransform(60.725,21.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhJBoIAAjNIArAAIAAAZQAFgMAMgIQALgHAQAAQAQAAAOAJQANAIAJAQQAHAQABAXQgBAVgHAQQgJAQgNAIQgOAJgQAAQgQAAgLgHQgMgHgFgNIAABcgAgVg4QgJAJAAAQQAAAPAJAJQAIAIANAAQANAAAJgIQAIgIAAgQQAAgQgIgJQgJgKgNAAQgNAAgIAKg");
	this.shape_10.setTransform(44.9,24.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag1BnIAghIIg6iFIAwAAIAgBWIAfhWIAwAAIhWDNg");
	this.shape_11.setTransform(28.125,24.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAhBZIAAhKIhCAAIAABKIgqAAIAAixIAqAAIAABFIBCAAIAAhFIArAAIAACxg");
	this.shape_12.setTransform(11.125,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,180.5,39), null);


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
	this.shape.graphics.f("#96EA13").s().p("AvrPrQkDkChhlGQg8jFAAjeQAAjcA8jGQBhlGEDkDQGgmgJLAAQJMAAGfGgQGgGgAAJLQAAJMmgGfQmfGgpMAAQpLAAmgmgg");
	this.shape.setTransform(141.95,141.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,283.9,283.9), null);


// stage content:
(lib.behaviour = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5_copy_copy
	this.instance = new lib.Symbol7();
	this.instance.setTransform(393.8,297.95,1,1,0,0,0,112,19.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({alpha:1},10).wait(122).to({alpha:0},10).wait(1));

	// Layer_5_copy
	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(328.15,256.7,1,1,0,0,0,90.2,19.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({alpha:1},10).wait(122).to({alpha:0},10).wait(1));

	// Layer_5
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(333.9,222.45,1,1,0,0,0,74.1,26.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).to({alpha:1},10).wait(122).to({alpha:0},10).wait(1));

	// Layer_4
	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(366.55,181.2,1,1,0,0,0,90.8,26.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({_off:false},0).to({alpha:1},10).wait(122).to({alpha:0},10).wait(1));

	// Layer_3
	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(335.8,134.35,1,1,0,0,0,73.9,55.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40).to({_off:false},0).to({alpha:1},10).wait(122).to({alpha:0},10).wait(1));

	// Layer_2
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(516.05,208.05,1,1,0,0,0,142,142);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:0.6484},13).to({x:375},14).to({scaleX:1.2607,scaleY:1.2607,x:388.2},13).wait(132).to({scaleX:1.2606,scaleY:1.2606},0).to({scaleX:1.2607,scaleY:1.2607,x:418.2,alpha:0},10).wait(1));

	// Layer_1
	this.instance_6 = new lib.Symbol2();
	this.instance_6.setTransform(182.1,208.05,1,1,0,0,0,142,142);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0.8984},13).to({x:334.05},14).to({scaleX:1.2607,scaleY:1.2607,x:320.9},13).wait(132).to({scaleX:1.2606,scaleY:1.2606},0).to({scaleX:1.2607,scaleY:1.2607,x:290.9,alpha:0},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(390.1,229,267.9,158);
// library properties:
lib.properties = {
	id: 'F82E133607E84623A67FA40109308B22',
	width: 700,
	height: 400,
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
