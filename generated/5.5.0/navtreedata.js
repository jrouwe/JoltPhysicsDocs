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
      [ "Multithreaded Access", "index.html#multi-threaded-access", null ],
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
    [ "Space Simulations", "index.html#space-simulations", null ],
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
      [ "Integrate &amp; Clamp Velocities", "index.html#integrate-and-clamp-velocities", null ],
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
    [ "Jolt Physics Samples", "md__docs_2_samples.html", [
      [ "General Controls", "md__docs_2_samples.html#autotoc_md75", null ],
      [ "The Tests", "md__docs_2_samples.html#autotoc_md76", [
        [ "Vehicles", "md__docs_2_samples.html#autotoc_md77", null ],
        [ "Rig (Ragdolls)", "md__docs_2_samples.html#autotoc_md78", null ],
        [ "Soft Body", "md__docs_2_samples.html#autotoc_md79", null ],
        [ "Character", "md__docs_2_samples.html#autotoc_md80", null ],
        [ "Water", "md__docs_2_samples.html#autotoc_md81", null ],
        [ "Constraints", "md__docs_2_samples.html#autotoc_md82", null ],
        [ "General", "md__docs_2_samples.html#autotoc_md83", null ],
        [ "Shapes &amp; Scaled Shapes", "md__docs_2_samples.html#autotoc_md84", null ]
      ] ]
    ] ],
    [ "Performance Test", "md__docs_2_performance_test.html", [
      [ "Commandline options", "md__docs_2_performance_test.html#autotoc_md71", null ],
      [ "Output", "md__docs_2_performance_test.html#autotoc_md72", null ],
      [ "Results", "md__docs_2_performance_test.html#autotoc_md73", null ]
    ] ],
    [ "Release Notes", "md__docs_2_release_notes.html", [
      [ "v5.5.0", "md__docs_2_release_notes.html#autotoc_md10", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md12", null ],
        [ "Bug Fixes", "md__docs_2_release_notes.html#autotoc_md13", null ]
      ] ],
      [ "v5.4.0", "md__docs_2_release_notes.html#autotoc_md14", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md15", null ],
        [ "Bug Fixes", "md__docs_2_release_notes.html#autotoc_md16", null ]
      ] ],
      [ "v5.3.0", "md__docs_2_release_notes.html#autotoc_md17", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md18", [
          [ "Samples", "md__docs_2_release_notes.html#autotoc_md19", null ],
          [ "MeshShape", "md__docs_2_release_notes.html#autotoc_md20", null ],
          [ "Character", "md__docs_2_release_notes.html#autotoc_md22", null ],
          [ "Collision Detection", "md__docs_2_release_notes.html#autotoc_md23", null ],
          [ "New Platforms", "md__docs_2_release_notes.html#autotoc_md24", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md25", null ]
        ] ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md26", null ]
      ] ],
      [ "v5.2.0", "md__docs_2_release_notes.html#autotoc_md29", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md30", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md31", null ]
      ] ],
      [ "v5.1.0", "md__docs_2_release_notes.html#autotoc_md32", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md33", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md34", null ],
          [ "HeightField Shape", "md__docs_2_release_notes.html#autotoc_md35", null ],
          [ "Character", "md__docs_2_release_notes.html#autotoc_md36", null ],
          [ "Vehicles", "md__docs_2_release_notes.html#autotoc_md37", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md38", null ]
        ] ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md39", null ]
      ] ],
      [ "v5.0.0", "md__docs_2_release_notes.html#autotoc_md40", [
        [ "New Functionality", "md__docs_2_release_notes.html#autotoc_md41", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md42", null ],
          [ "Vehicles", "md__docs_2_release_notes.html#autotoc_md43", null ],
          [ "Character", "md__docs_2_release_notes.html#autotoc_md44", null ],
          [ "Constraints", "md__docs_2_release_notes.html#autotoc_md45", null ],
          [ "Collision Detection", "md__docs_2_release_notes.html#autotoc_md46", null ],
          [ "Simulation", "md__docs_2_release_notes.html#autotoc_md47", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md48", null ]
        ] ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md49", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md50", null ]
      ] ],
      [ "v4.0.2", "md__docs_2_release_notes.html#autotoc_md51", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md52", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md53", null ]
      ] ],
      [ "v4.0.1", "md__docs_2_release_notes.html#autotoc_md54", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md55", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md56", null ]
      ] ],
      [ "v4.0.0", "md__docs_2_release_notes.html#autotoc_md57", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md58", null ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md59", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md60", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md61", null ]
      ] ],
      [ "v3.0.0", "md__docs_2_release_notes.html#autotoc_md62", null ],
      [ "v2.0.1", "md__docs_2_release_notes.html#autotoc_md63", null ],
      [ "v2.0.0", "md__docs_2_release_notes.html#autotoc_md64", [
        [ "Major new functionality", "md__docs_2_release_notes.html#autotoc_md65", null ],
        [ "New supported compilers", "md__docs_2_release_notes.html#autotoc_md66", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md67", null ]
      ] ],
      [ "v1.1.0", "md__docs_2_release_notes.html#autotoc_md68", null ],
      [ "v1.0.0", "md__docs_2_release_notes.html#autotoc_md69", null ]
    ] ],
    [ "Breaking API Changes", "md__docs_2_a_p_i_changes.html", [
      [ "Changes between v5.4.0 and v5.5.0", "md__docs_2_a_p_i_changes.html#autotoc_md2", null ],
      [ "Changes between v5.3.0 and v5.4.0", "md__docs_2_a_p_i_changes.html#autotoc_md3", null ],
      [ "Changes between v5.2.0 and v5.3.0", "md__docs_2_a_p_i_changes.html#autotoc_md4", null ],
      [ "Changes between v5.1.0 and v5.2.0", "md__docs_2_a_p_i_changes.html#autotoc_md5", null ],
      [ "Changes between v5.0.0 and v5.1.0", "md__docs_2_a_p_i_changes.html#autotoc_md6", null ],
      [ "Changes between v4.0.2 and v5.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md7", null ],
      [ "Changes between v4.0.0 and v4.0.2", "md__docs_2_a_p_i_changes.html#autotoc_md8", null ],
      [ "Changes between v3.0.1 and v4.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md9", null ],
      [ "Changes between v2.0.1 and v3.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md11", null ],
      [ "Changes between v1.1.0 and v2.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md21", null ],
      [ "Changes between v1.0.0 and v1.1.0", "md__docs_2_a_p_i_changes.html#autotoc_md27", null ],
      [ "Changes between v0.0.0 and v1.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md28", null ]
    ] ],
    [ "Projects Using Jolt", "md__docs_2_projects_using_jolt.html", null ],
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
        [ "Related Symbols", "functions_rela.html", null ]
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
"_constraint_8h.html#adfc8350888df0c3a51714b7f372baf2da8ee4f481186dec454e1fac31c622045e",
"_height_field_shape_8cpp.html",
"_object_stream_out_8h_source.html",
"_serializable_attribute_8h.html#a1c4e088742cfa4700da8d88eacf5974aa4410ec34d9e6c1a68100ca0ce033fb17",
"_swizzle_8h_source.html",
"class_all_hit_collision_collector.html#a6301883d4dfcfd89e61ac4cd62e5c92a",
"class_body.html#abb35a0778672e9f3622d8cfa93b428b3",
"class_body_manager.html#a2a65ea34748b9f3f354d4325f905ab1c",
"class_cast_sphere_vs_triangles.html#ab317c8a940b4398351ccb4e3f4477688",
"class_collide_convex_vs_triangles.html#ab9cbc3709c7d17d812ca1eba57f8f436",
"class_constraint.html#ae26efcf11518c9b1c2e15821ca7d8937",
"class_cylinder_shape.html#a30d8aeffc7430806287324f7f55eb5a5",
"class_decorated_shape.html#a24a5fc486a279b6afaf2cada33f28272",
"class_float4.html#a67246a6a476dc5966564d861ed637d56",
"class_hinge_rotation_constraint_part.html#a41471ce4cbe4f3b915ba40f883a3f924",
"class_large_island_splitter_1_1_splits.html#a6757c784f684e5fb2ac4ce79f3c0a2f0",
"class_motion_properties.html#acebdeeddc6f51f570414a094cf668992",
"class_object_stream_text_out.html#a10331f7980083d8c57d404091df88922",
"class_physics_system.html#ae13975e609ff125fa02b922795777824",
"class_quat.html#afc3276d69ac8713afddf3cf970c27371",
"class_rotated_translated_shape.html#adb464f1e2b1cc92b8842b8b9c799711f",
"class_shape_settings.html",
"class_slider_constraint_settings.html#a674de926b2858e971516a15d93e168c0",
"class_sphere.html#ae662c4e0d3f338fe5c5bfa844aaa22ea",
"class_swing_twist_constraint.html#a7ba465390161d081cbfa4f6d313308e5",
"class_triangle_codec_indexed8_bit_pack_s_o_a4_flags.html#aba0ce878fb1bfe022ccba4c9c724a2f7a8ee2cdd53a4c605008ef9cfaecf00211",
"class_vec3.html#ae0bbf04d3791ef12a0b2d114e190ed8e",
"class_vehicle_engine.html#a10cc014bfd4c08086fc83ef73948c7ba",
"functions_func_g.html",
"md__docs_2_release_notes.html#autotoc_md53",
"struct_compound_shape_1_1_collide_compound_vs_shape_visitor.html#a63d01e5f27bd4944b066e6a33c3f4698",
"struct_ray_cast_t.html#abe1d2e9b088ca71ca732e0b5234696fd"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';