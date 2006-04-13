/* ************************************************************************

   qooxdoo - the new era of web interface development

   Copyright:
     (C) 2004-2006 by Schlund + Partner AG, Germany
         All rights reserved

   License:
     LGPL 2.1: http://creativecommons.org/licenses/LGPL/2.1/

   Internet:
     * http://qooxdoo.oss.schlund.de

   Authors:
     * Sebastian Werner (wpbasti)
       <sebastian dot werner at 1und1 dot de>
     * Andreas Ecker (aecker)
       <andreas dot ecker at 1und1 dot de>

************************************************************************ */

/* ************************************************************************

#package(transport)

************************************************************************ */

qx.io.remote.RemoteResponse = function() {
  qx.core.Target.call(this);
};

qx.io.remote.RemoteResponse.extend(qx.core.Target, "qx.io.remote.RemoteResponse");




/*
---------------------------------------------------------------------------
  PROPERTIES
---------------------------------------------------------------------------
*/

qx.io.remote.RemoteResponse.addProperty({ name : "state", type : QxConst.TYPEOF_NUMBER });
/*!
  Status code of the response.
*/
qx.io.remote.RemoteResponse.addProperty({ name : "statusCode", type : QxConst.TYPEOF_NUMBER });
qx.io.remote.RemoteResponse.addProperty({ name : "content" });
qx.io.remote.RemoteResponse.addProperty({ name : "responseHeaders", type : QxConst.TYPEOF_OBJECT });







/*
---------------------------------------------------------------------------
  MODIFIERS
---------------------------------------------------------------------------
*/

/*
proto._modifyResponseHeaders = function(propValue, propOldValue, propData)
{
  for (vKey in propValue) {
    this.debug("R-Header: " + vKey + "=" + propValue[vKey]);
  };

  return true;
};
*/







/*
---------------------------------------------------------------------------
  USER METHODS
---------------------------------------------------------------------------
*/

proto.getResponseHeader = function(vHeader)
{
  var vAll = this.getResponseHeaders();
  if (vAll) {
    return vAll[vHeader] || null;
  };

  return null;
};






/*
---------------------------------------------------------------------------
  DISPOSER
---------------------------------------------------------------------------
*/

proto.dispose = function()
{
  if (this.getDisposed()) {
    return;
  };

  return qx.core.Target.prototype.dispose.call(this);
};
