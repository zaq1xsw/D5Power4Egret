module d5power
{
    export class D5MirrorBox extends D5Component
    {
        private lt:egret.Bitmap;
        private t:egret.Bitmap;
        private rt:egret.Bitmap;
        private l:egret.Bitmap;
        private m:egret.Bitmap;
        private r:egret.Bitmap;
        private lb:egret.Bitmap;
        private b:egret.Bitmap;
        private rb:egret.Bitmap;

        public constructor()
        {
            super();
        }

        public setSkin(name:string):void
        {
            if(this._nowName == name) return;
            this._nowName = name;
            var data:D5UIResourceData = D5UIResourceData.getData(name);
            if(data==null)
            {
                trace("[D5MirrorBox]No Resource"+name);
                return;
            }
            if(this.lt==null)this.lt = new egret.Bitmap();
            this.lt.texture = data.getResource(0);

            if(this.t==null)this.t = new egret.Bitmap();
            this.t.texture = data.getResource(1);
            this.t.fillMode = egret.BitmapFillMode.REPEAT;

            if(this.rt==null)this.rt = new egret.Bitmap();
            this.rt.texture = data.getResource(0);
            this.rt.scaleX = -1;

            if(this.l==null)this.l = new egret.Bitmap();
            this.l.texture = data.getResource(2);
            this.l.fillMode = egret.BitmapFillMode.REPEAT;

            if(this.m==null)this.m = new egret.Bitmap();
            this.m.texture = data.getResource(3);
            this.m.fillMode = egret.BitmapFillMode.REPEAT;

            if(this.r==null)this.r = new egret.Bitmap();
            this.r.texture = data.getResource(2);
            this.r.scaleX = -1;
            this.r.fillMode = egret.BitmapFillMode.REPEAT;

            if(this.lb==null)this.lb = new egret.Bitmap();
            this.lb.texture = data.getResource(0);
            this.lb.scaleY=-1;

            if(this.b==null)this.b = new egret.Bitmap();
            this.b.texture = data.getResource(1);
            this.b.scaleY=-1;
            this.b.fillMode = egret.BitmapFillMode.REPEAT;

            if(this.rb==null)this.rb = new egret.Bitmap();
            this.rb.texture = data.getResource(0);
            this.rb.scaleX=this.rb.scaleY=-1;
            this.rb.fillMode = egret.BitmapFillMode.REPEAT;

            this.invalidate();
        }

        public draw():void
        {
            if(this.l==null)
            {

            }else{
                if(!this.contains(this.l))
                {
                    this.addChildAt(this.lt,0);
                    this.addChildAt(this.t,0);
                    this.addChildAt(this.rt,0);
                    this.addChildAt(this.l,0);
                    this.addChildAt(this.m,0);
                    this.addChildAt(this.r,0);
                    this.addChildAt(this.lb,0);
                    this.addChildAt(this.b,0);
                    this.addChildAt(this.rb,0);
                }

                this.t.x = this.m.x = this.b.x = this.lt.width;
                this.rt.x = this.r.x = this.rb.x = this._w;

                this.l.y = this.m.y = this.r.y = this.lt.height;
                this.lb.y = this.b.y = this.rb.y = this._h;

                this.m.width = this.t.width = this.b.width = this._w-this.lt.width*2;
                this.m.height = this.l.height = this.r.height = this._h-this.lt.height*2;

            }

            this.dispatchEvent(new egret.Event(egret.Event.COMPLETE));
            super.draw();
        }
        public get mBitmap():egret.Bitmap
        {
            return this.m;
        }

    }
}