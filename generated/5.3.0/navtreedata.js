/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Jolt Physics", "index.html", [
    [ "Architecture of Jolt Physics", "index.html#architecture-jolt-physics", null ],
    [ "Getting Started", "index.html#getting-started", null ],
    [ "Bodies", "index.html#bodies", [
      [ "Types", "index.html#body-types", null ],
      [ "Creating Bodies", "index.html#creating-bodies", null ],
      [ "Multithreaded Access", "index.html#autotoc_md93", null ],
      [ "Single Threaded Access", "index.html#single-threaded-access", null ],
      [ "Shapes", "index.html#shapes", [
        [ "Dynamic Mesh Shapes", "index.html#dynamic-mesh-shapes", null ],
        [ "Creating Shapes", "index.html#creating-shapes", null ],
        [ "Saving Shapes", "index.html#saving-shapes", null ],
        [ "Convex Radius", "index.html#convex-radius", null ],
        [ "Center of Mass", "index.html#center-of-mass", null ],
        [ "Scaling Shapes", "index.html#scaling-shapes", null ],
        [ "Creating Custom Shapes", "index.html#creating-custom-shapes", null ]
      ] ],
      [ "Sensors", "index.html#sensors", null ],
      [ "Sleeping", "index.html#sleeping-bodies", null ],
      [ "Soft Bodies", "index.html#soft-bodies", [
        [ "Soft Body Contact Listeners", "index.html#soft-body-contact-listener", null ],
        [ "Skinning Soft Bodies", "index.html#skinning-soft-bodies", null ],
        [ "Soft Body Work In Progress", "index.html#soft-body-wip", null ]
      ] ]
    ] ],
    [ "Constraints", "index.html#constraints", [
      [ "Constraint Motors", "index.html#constraint-motors", null ],
      [ "Breakable Constraints", "index.html#breakable-constraints", null ]
    ] ],
    [ "Collision Detection", "index.html#collision-detection", [
      [ "Broad Phase", "index.html#broad-phase", null ],
      [ "Narrow Phase", "index.html#narrow-phase", null ],
      [ "Collision Filtering", "index.html#collision-filtering", null ],
      [ "Level of Detail", "index.html#level-of-detail", null ],
      [ "Continuous Collision Detection", "index.html#continuous-collision-detection", null ],
      [ "Ghost Collisions", "index.html#ghost-collisions", null ]
    ] ],
    [ "Character Controllers", "index.html#character-controllers", null ],
    [ "The Simulation Step", "index.html#the-simulation-step", null ],
    [ "Conventions and Limits", "index.html#conventions-and-limits", null ],
    [ "Big Worlds", "index.html#big-worlds", null ],
    [ "Deterministic Simulation", "index.html#deterministic-simulation", null ],
    [ "Rolling Back a Simulation", "index.html#rolling-back-a-simulation", null ],
    [ "Being Sloppy While Still Being Deterministic", "index.html#sloppy-determinism", null ],
    [ "Working With Multiple Physics Systems", "index.html#working-with-multiple-physics-systems", null ],
    [ "Debug Rendering", "index.html#debug-rendering", null ],
    [ "Memory Management", "index.html#memory-management", null ],
    [ "The Simulation Step in Detail", "index.html#the-simulation-step-in-detail", [
      [ "Broad Phase Update Prepare", "index.html#broad-phase-update-prepare", null ],
      [ "Broad Phase Update Finalize", "index.html#broad-phase-update-finalize", null ],
      [ "Step Listeners", "index.html#step-listeners-update", null ],
      [ "Apply Gravity", "index.html#apply-gravity-update", null ],
      [ "Determine Active Constraints", "index.html#determine-active-constraints", null ],
      [ "Build Islands from Constraints", "index.html#build-islands-from-constraints", null ],
      [ "Find Collisions", "index.html#find-collisions", null ],
      [ "Setup Velocity Constraints", "index.html#setup-velocity-constraints", null ],
      [ "Finalize Islands", "index.html#finalize-islands", null ],
      [ "Set Body Island Idx", "index.html#set-body-island-idx", null ],
      [ "Solve Velocity Constraints", "index.html#solve-velocity-constraints", null ],
      [ "Pre Integrate", "index.html#pre-integrate", null ],
      [ "Integrate & Clamp Velocities", "index.html#integrate-and-clamp-velocities", null ],
      [ "Post Integrate", "index.html#post-integrate", null ],
      [ "Find CCD Contacts", "index.html#find-ccd-contacts", null ],
      [ "Resolve CCD Contacts", "index.html#resolve-ccd-contacts", null ],
      [ "Finalize Contact Cache, Contact Removed Callbacks", "index.html#finalize-contact-cache", null ],
      [ "Solve Position Constraints, Update Bodies Broad Phase", "index.html#solve-position-constraints", null ],
      [ "Soft Body Prepare", "index.html#soft-body-prepare", null ],
      [ "Soft Body Collide", "index.html#soft-body-collide", null ],
      [ "Soft Body Simulate", "index.html#soft-body-simulate", null ],
      [ "Soft Body Finalize", "index.html#soft-body-finalize", null ]
    ] ],
    [ "Jolt Physics Samples", "md__docs__samples.html", [
      [ "General Controls", "md__docs__samples.html#autotoc_md43", null ],
      [ "The Tests", "md__docs__samples.html#autotoc_md45", [
        [ "Vehicles", "md__docs__samples.html#autotoc_md46", null ],
        [ "Rig (Ragdolls)", "md__docs__samples.html#autotoc_md51", null ],
        [ "Soft Body", "md__docs__samples.html#autotoc_md53", null ],
        [ "Character", "md__docs__samples.html#autotoc_md54", null ],
        [ "Water", "md__docs__samples.html#autotoc_md55", null ],
        [ "Constraints", "md__docs__samples.html#autotoc_md57", null ],
        [ "General", "md__docs__samples.html#autotoc_md58", null ],
        [ "Shapes & Scaled Shapes", "md__docs__samples.html#autotoc_md60", null ]
      ] ]
    ] ],
    [ "Performance Test", "md__docs__performance_test.html", [
      [ "Commandline options", "md__docs__performance_test.html#autotoc_md14", null ],
      [ "Output", "md__docs__performance_test.html#autotoc_md15", null ],
      [ "Results", "md__docs__performance_test.html#autotoc_md16", null ]
    ] ],
    [ "Release Notes", "md__docs__release_notes.html", [
      [ "v5.3.0", "md__docs__release_notes.html#autotoc_md19", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md20", [
          [ "Samples", "md__docs__release_notes.html#autotoc_md21", null ],
          [ "MeshShape", "md__docs__release_notes.html#autotoc_md23", null ],
          [ "Character", "md__docs__release_notes.html#autotoc_md26", null ],
          [ "Collision Detection", "md__docs__release_notes.html#autotoc_md27", null ],
          [ "New Platforms", "md__docs__release_notes.html#autotoc_md31", null ],
          [ "Various", "md__docs__release_notes.html#autotoc_md32", null ]
        ] ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md33", null ]
      ] ],
      [ "v5.2.0", "md__docs__release_notes.html#autotoc_md42", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md44", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md47", null ]
      ] ],
      [ "v5.1.0", "md__docs__release_notes.html#autotoc_md48", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md49", [
          [ "Soft Body", "md__docs__release_notes.html#autotoc_md50", null ],
          [ "HeightField Shape", "md__docs__release_notes.html#autotoc_md52", null ],
          [ "Character", "md__docs__release_notes.html#autotoc_md56", null ],
          [ "Vehicles", "md__docs__release_notes.html#autotoc_md59", null ],
          [ "Various", "md__docs__release_notes.html#autotoc_md61", null ]
        ] ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md62", null ]
      ] ],
      [ "v5.0.0", "md__docs__release_notes.html#autotoc_md63", [
        [ "New Functionality", "md__docs__release_notes.html#autotoc_md64", [
          [ "Soft Body", "md__docs__release_notes.html#autotoc_md65", null ],
          [ "Vehicles", "md__docs__release_notes.html#autotoc_md66", null ],
          [ "Character", "md__docs__release_notes.html#autotoc_md67", null ],
          [ "Constraints", "md__docs__release_notes.html#autotoc_md68", null ],
          [ "Collision Detection", "md__docs__release_notes.html#autotoc_md69", null ],
          [ "Simulation", "md__docs__release_notes.html#autotoc_md70", null ],
          [ "Various", "md__docs__release_notes.html#autotoc_md71", null ]
        ] ],
        [ "Removed functionality", "md__docs__release_notes.html#autotoc_md72", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md73", null ]
      ] ],
      [ "v4.0.2", "md__docs__release_notes.html#autotoc_md74", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md75", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md76", null ]
      ] ],
      [ "v4.0.1", "md__docs__release_notes.html#autotoc_md77", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md78", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md79", null ]
      ] ],
      [ "v4.0.0", "md__docs__release_notes.html#autotoc_md80", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md81", null ],
        [ "Removed functionality", "md__docs__release_notes.html#autotoc_md82", null ],
        [ "New supported platforms", "md__docs__release_notes.html#autotoc_md83", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md84", null ]
      ] ],
      [ "v3.0.0", "md__docs__release_notes.html#autotoc_md85", null ],
      [ "v2.0.1", "md__docs__release_notes.html#autotoc_md86", null ],
      [ "v2.0.0", "md__docs__release_notes.html#autotoc_md87", [
        [ "Major new functionality", "md__docs__release_notes.html#autotoc_md88", null ],
        [ "New supported compilers", "md__docs__release_notes.html#autotoc_md89", null ],
        [ "New supported platforms", "md__docs__release_notes.html#autotoc_md90", null ]
      ] ],
      [ "v1.1.0", "md__docs__release_notes.html#autotoc_md91", null ],
      [ "v1.0.0", "md__docs__release_notes.html#autotoc_md92", null ]
    ] ],
    [ "Breaking API Changes", "md__docs__a_p_i_changes.html", [
      [ "Changes between v5.2.0 and v5.3.0", "md__docs__a_p_i_changes.html#autotoc_md2", null ],
      [ "Changes between v5.1.0 and v5.2.0", "md__docs__a_p_i_changes.html#autotoc_md3", null ],
      [ "Changes between v5.0.0 and v5.1.0", "md__docs__a_p_i_changes.html#autotoc_md4", null ],
      [ "Changes between v4.0.2 and v5.0.0", "md__docs__a_p_i_changes.html#autotoc_md5", null ],
      [ "Changes between v4.0.0 and v4.0.2", "md__docs__a_p_i_changes.html#autotoc_md6", null ],
      [ "Changes between v3.0.1 and v4.0.0", "md__docs__a_p_i_changes.html#autotoc_md7", null ],
      [ "Changes between v2.0.1 and v3.0.0", "md__docs__a_p_i_changes.html#autotoc_md8", null ],
      [ "Changes between v1.1.0 and v2.0.0", "md__docs__a_p_i_changes.html#autotoc_md9", null ],
      [ "Changes between v1.0.0 and v1.1.0", "md__docs__a_p_i_changes.html#autotoc_md10", null ],
      [ "Changes between v0.0.0 and v1.0.0", "md__docs__a_p_i_changes.html#autotoc_md11", null ]
    ] ],
    [ "Building and Using Jolt Physics", "md__build__r_e_a_d_m_e.html", [
      [ "Build Types", "md__build__r_e_a_d_m_e.html#autotoc_md22", null ],
      [ "Includes", "md__build__r_e_a_d_m_e.html#autotoc_md24", null ],
      [ "Defines", "md__build__r_e_a_d_m_e.html#autotoc_md25", null ],
      [ "Logging & Asserting", "md__build__r_e_a_d_m_e.html#autotoc_md28", null ],
      [ "Custom Memory Allocator", "md__build__r_e_a_d_m_e.html#autotoc_md29", null ],
      [ "Building", "md__build__r_e_a_d_m_e.html#autotoc_md30", null ],
      [ "Other Build Tools", "md__build__r_e_a_d_m_e.html#autotoc_md34", null ],
      [ "Errors", "md__build__r_e_a_d_m_e.html#autotoc_md35", [
        [ "Link Error: File Format Not Recognized", "md__build__r_e_a_d_m_e.html#autotoc_md36", null ],
        [ "Link Error: Unresolved External Symbol", "md__build__r_e_a_d_m_e.html#autotoc_md37", null ],
        [ "Link Error: Undefined Symbol", "md__build__r_e_a_d_m_e.html#autotoc_md38", null ],
        [ "DirectX Error", "md__build__r_e_a_d_m_e.html#autotoc_md39", null ],
        [ "Illegal Instruction Error", "md__build__r_e_a_d_m_e.html#autotoc_md40", null ]
      ] ],
      [ "Doxygen on Windows", "md__build__r_e_a_d_m_e.html#autotoc_md41", null ]
    ] ],
    [ "Projects Using Jolt", "md__docs__projects_using_jolt.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", "functions_type" ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_a_a_b_b_tree_builder_8cpp.html",
"_constraint_8h.html#adfc8350888df0c3a51714b7f372baf2da2d9b9a764fb0be4be10e1b2fce63f561",
"_hash_combine_8h.html#a8ce241fe287672b4a559499d341d2ee7",
"_object_stream_binary_out_8h_source.html",
"_scale_helpers_8h.html#abf3b185a98bea874b96fa82a0db2d7e2",
"_string_tools_8h.html",
"class_a_a_box.html#abd758e269f2b5b508a7dd66a427e4dba",
"class_body.html#a9e3350c41c89f980a2198b359ba62857",
"class_body_manager.html",
"class_cast_convex_vs_triangles.html",
"class_collide_convex_vs_triangles.html#a69acefd643423ee75a0ba2177d0973a8",
"class_constraint.html#aa6621fbefd246003aece1e9be8a169cb",
"class_cylinder_shape.html#a1079164769598081f54bd33700747b57",
"class_decorated_shape.html",
"class_float4.html",
"class_hinge_rotation_constraint_part.html#a41471ce4cbe4f3b915ba40f883a3f924",
"class_large_island_splitter_1_1_splits.html#aa3d8218f5eefc7a12e3d884f8a52034f",
"class_motion_properties.html#ae1d0e7670106211909852cd6844286d9",
"class_object_stream_text_out.html#aa108e6984ae10e3df0f26aae50103e1a",
"class_physics_update_context.html#a28312d2f14f0c11540c28f7162f927ce",
"class_r_t_t_i.html#a05e1a68c508992c39107dcdde015138b",
"class_rotated_translated_shape.html#af35a0921b0454466b5a24882acba7ddb",
"class_shape_settings.html#acd32835291c84d23e49c15194c1b0424",
"class_slider_constraint_settings.html#abe9a0acdb04a3edde746680d7656e388",
"class_sphere.html#a1c4a9559681c92e3520ba68310805a06",
"class_swing_twist_constraint.html#a5cf8ea24972bf6fd7c614d8e5a851b37",
"class_triangle_codec_indexed8_bit_pack_s_o_a4_flags.html#a9ae76041d1be874601839088c1e62bef",
"class_vec3.html#ad08ae539c06ae81a334c530bcb024b35",
"class_vehicle_engine.html#ae6735223f4b1d1fc898309e671504731",
"functions_func_t.html",
"md__docs__release_notes.html#autotoc_md82",
"struct_compound_shape_1_1_collide_compound_vs_shape_visitor.html#afd4c304df5e719a22c21e479fbfffa32",
"struct_physics_update_context_1_1_step.html#acfb1fe9af1d8ea1e6c10964a1a73915d"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';