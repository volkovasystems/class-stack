
var Stack = function Stack( ){
    this.referenceSet = { };
    this.stackList = [ ];
    this.stackSet = { };
    this.currentLevel = -1;
};

Stack.prototype.push = function push( value ){
    this.currentLevel++;

    this.stackSet[ this.currentLevel ] = value;
    this.stackList.push( this.currentLevel );
};

Stack.prototype.pop = function pop( ){
    try{
        return this.stackSet[ this.stackList.pop( ) ];

    }finally{
        delete this.stackSet[ this.currentLevel-- ];
    }
};

Stack.prototype.