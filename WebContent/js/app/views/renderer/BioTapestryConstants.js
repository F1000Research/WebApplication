/*
 **    Copyright (C) 2003-2014 Institute for Systems Biology
 **                            Seattle, Washington, USA.
 **
 **    This library is free software; you can redistribute it and/or
 **    modify it under the terms of the GNU Lesser General Public
 **    License as published by the Free Software Foundation; either
 **    version 2.1 of the License, or (at your option) any later version.
 **
 **    This library is distributed in the hope that it will be useful,
 **    but WITHOUT ANY WARRANTY; without even the implied warranty of
 **    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 **    Lesser General Public License for more details.
 **
 **    You should have received a copy of the GNU Lesser General Public
 **    License along with this library; if not, write to the Free Software
 **    Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 */

define([

], function (

) {
    return {
        DRAWLAYERS: [
            'BACKGROUD_REGIONS',
            'UNDERLAY',
            'VFN_GHOSTED',
            'VFN_UNUSED_REGIONS',
            'MODEL_NODEGROUPS',
            'FOREGROUND_REGIONS',
            'OVERLAY',
            'MODELDATA'
            ],
        NUM_MAJOR_LAYERS: 8,
        NUM_MINOR_LAYERS: 8,

        LINKAGE_BOUND_PADDING: 2.0
    };

// end define
});