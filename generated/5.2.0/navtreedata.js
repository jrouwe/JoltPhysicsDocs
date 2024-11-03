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
    [ "Bodies", "index.html#bodies", [
      [ "Types", "index.html#body-types", null ],
      [ "Creating Bodies", "index.html#creating-bodies", null ],
      [ "Multithreaded Access", "index.html#autotoc_md82", null ],
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
      [ "General Controls", "md__docs__samples.html#autotoc_md72", null ],
      [ "The Tests", "md__docs__samples.html#autotoc_md73", [
        [ "Vehicles", "md__docs__samples.html#autotoc_md74", null ],
        [ "Rig (Ragdolls)", "md__docs__samples.html#autotoc_md75", null ],
        [ "Soft Body", "md__docs__samples.html#autotoc_md76", null ],
        [ "Character", "md__docs__samples.html#autotoc_md77", null ],
        [ "Water", "md__docs__samples.html#autotoc_md78", null ],
        [ "Constraints", "md__docs__samples.html#autotoc_md79", null ],
        [ "General", "md__docs__samples.html#autotoc_md80", null ],
        [ "Shapes & Scaled Shapes", "md__docs__samples.html#autotoc_md81", null ]
      ] ]
    ] ],
    [ "Performance Test", "md__docs__performance_test.html", [
      [ "Commandline options", "md__docs__performance_test.html#autotoc_md69", null ],
      [ "Output", "md__docs__performance_test.html#autotoc_md70", null ],
      [ "Results", "md__docs__performance_test.html#autotoc_md71", null ]
    ] ],
    [ "Release Notes", "md__docs__release_notes.html", [
      [ "v5.2.0", "md__docs__release_notes.html#autotoc_md18", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md19", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md20", null ]
      ] ],
      [ "v5.1.0", "md__docs__release_notes.html#autotoc_md24", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md26", [
          [ "Soft Body", "md__docs__release_notes.html#autotoc_md28", null ],
          [ "HeightField Shape", "md__docs__release_notes.html#autotoc_md31", null ],
          [ "Character", "md__docs__release_notes.html#autotoc_md32", null ],
          [ "Vehicles", "md__docs__release_notes.html#autotoc_md33", null ],
          [ "Various", "md__docs__release_notes.html#autotoc_md34", null ]
        ] ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md35", null ]
      ] ],
      [ "v5.0.0", "md__docs__release_notes.html#autotoc_md36", [
        [ "New Functionality", "md__docs__release_notes.html#autotoc_md37", [
          [ "Soft Body", "md__docs__release_notes.html#autotoc_md38", null ],
          [ "Vehicles", "md__docs__release_notes.html#autotoc_md39", null ],
          [ "Character", "md__docs__release_notes.html#autotoc_md40", null ],
          [ "Constraints", "md__docs__release_notes.html#autotoc_md41", null ],
          [ "Collision Detection", "md__docs__release_notes.html#autotoc_md42", null ],
          [ "Simulation", "md__docs__release_notes.html#autotoc_md43", null ],
          [ "Various", "md__docs__release_notes.html#autotoc_md44", null ]
        ] ],
        [ "Removed functionality", "md__docs__release_notes.html#autotoc_md45", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md46", null ]
      ] ],
      [ "v4.0.2", "md__docs__release_notes.html#autotoc_md47", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md48", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md49", null ]
      ] ],
      [ "v4.0.1", "md__docs__release_notes.html#autotoc_md50", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md51", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md52", null ]
      ] ],
      [ "v4.0.0", "md__docs__release_notes.html#autotoc_md53", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md54", null ],
        [ "Removed functionality", "md__docs__release_notes.html#autotoc_md55", null ],
        [ "New supported platforms", "md__docs__release_notes.html#autotoc_md56", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md57", null ]
      ] ],
      [ "v3.0.0", "md__docs__release_notes.html#autotoc_md58", null ],
      [ "v2.0.1", "md__docs__release_notes.html#autotoc_md59", null ],
      [ "v2.0.0", "md__docs__release_notes.html#autotoc_md60", [
        [ "Major new functionality", "md__docs__release_notes.html#autotoc_md61", null ],
        [ "New supported compilers", "md__docs__release_notes.html#autotoc_md62", null ],
        [ "New supported platforms", "md__docs__release_notes.html#autotoc_md63", null ]
      ] ],
      [ "v1.1.0", "md__docs__release_notes.html#autotoc_md64", null ],
      [ "v1.0.0", "md__docs__release_notes.html#autotoc_md65", null ]
    ] ],
    [ "Breaking API Changes", "md__docs__a_p_i_changes.html", [
      [ "Changes between v5.1.0 and v5.2.0", "md__docs__a_p_i_changes.html#autotoc_md3", null ],
      [ "Changes between v5.0.0 and v5.1.0", "md__docs__a_p_i_changes.html#autotoc_md4", null ],
      [ "Changes between v4.0.2 and v5.0.0", "md__docs__a_p_i_changes.html#autotoc_md5", null ],
      [ "Changes between v4.0.0 and v4.0.2", "md__docs__a_p_i_changes.html#autotoc_md6", null ],
      [ "Changes between v3.0.1 and v4.0.0", "md__docs__a_p_i_changes.html#autotoc_md7", null ],
      [ "Changes between v2.0.1 and v3.0.0", "md__docs__a_p_i_changes.html#autotoc_md8", null ],
      [ "Changes between v1.1.0 and v2.0.0", "md__docs__a_p_i_changes.html#autotoc_md10", null ],
      [ "Changes between v1.0.0 and v1.1.0", "md__docs__a_p_i_changes.html#autotoc_md12", null ],
      [ "Changes between v0.0.0 and v1.0.0", "md__docs__a_p_i_changes.html#autotoc_md13", null ]
    ] ],
    [ "Building and Using Jolt Physics", "md__build__r_e_a_d_m_e.html", [
      [ "Build Types", "md__build__r_e_a_d_m_e.html#autotoc_md9", null ],
      [ "Includes", "md__build__r_e_a_d_m_e.html#autotoc_md11", null ],
      [ "Defines", "md__build__r_e_a_d_m_e.html#autotoc_md14", null ],
      [ "Logging & Asserting", "md__build__r_e_a_d_m_e.html#autotoc_md15", null ],
      [ "Custom Memory Allocator", "md__build__r_e_a_d_m_e.html#autotoc_md16", null ],
      [ "Building", "md__build__r_e_a_d_m_e.html#autotoc_md17", null ],
      [ "Other Build Tools", "md__build__r_e_a_d_m_e.html#autotoc_md21", null ],
      [ "Errors", "md__build__r_e_a_d_m_e.html#autotoc_md22", [
        [ "Link Error: File Format Not Recognized", "md__build__r_e_a_d_m_e.html#autotoc_md23", null ],
        [ "Link Error: Unresolved External Symbol", "md__build__r_e_a_d_m_e.html#autotoc_md25", null ],
        [ "DirectX Error", "md__build__r_e_a_d_m_e.html#autotoc_md27", null ],
        [ "Illegal Instruction Error", "md__build__r_e_a_d_m_e.html#autotoc_md29", null ]
      ] ],
      [ "Doxygen on Windows", "md__build__r_e_a_d_m_e.html#autotoc_md30", null ]
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
        [ "Typedefs", "functions_type.html", null ],
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
"_constraint_8h.html#adfc8350888df0c3a51714b7f372baf2dad6af9c1eaff2a89ebd3f8d0c542be12b",
"_height_field_shape_8h.html#ac7f85b459fc57cd090cdd118a0072d4b",
"_object_vs_broad_phase_layer_filter_mask_8h.html",
"_serializable_attribute_8h.html#a1c4e088742cfa4700da8d88eacf5974aa497031794414a552435f90151ac3b54b",
"_swing_twist_constraint_part_8h.html#add9e89df628b33308461ef46e1b796b6acd2c8bc6e5f1ea17c918ccaf89660104",
"class_a_a_box.html#ace160fe5908ca1b3125b757bdfde8d22",
"class_body_creation_settings.html#aaefa0f471f73fbfaf0f288e56e20b384",
"class_box_shape.html#a9c2aaae3c5b69a6154a5ef68b0faf764",
"class_character_base.html#ac4771494235c54165b6b4c9ad64dcdc8",
"class_color.html#a03d0301862c3ad6820ced1619c30ab2b",
"class_convex_hull_builder2_d.html#a249cc4fd8288bd1cf447d3d820e9dcd0a505a83f220c02df2f85c3810cd9ceb38",
"class_d_vec3.html#a829a6fd58f3d3bd2da8f4f56f09df728",
"class_e_p_a_convex_hull_builder_1_1_triangle.html#a6a342146811919c9bdd18ee827e1ee87",
"class_height_field_shape_settings.html#a356d9e6fda2e3fca23239b77dd86d273",
"class_job_system_single_threaded.html#aa491ca6999f7f2285a79b114b696e6ac",
"class_mesh_shape.html#afb09372cb71fdbe4cca9718557e144d0",
"class_object_stream_binary_out.html#a61fa64a09b0a198016555a219a3cea19",
"class_physics_system.html#a0535d433ffd7c3d00595ba784ada4f91",
"class_quad_tree.html#ab83e557e1224ba241789ce7d7da982de",
"class_ref_target_virtual.html",
"class_shape.html#aba9738d09ec43b40f10e32d1793b7ef5",
"class_slider_constraint.html#aa1c23dfc17c263c4d67d42913844a6f3",
"class_soft_body_update_context.html#aeef08cf407990a9950c06a5418bd11e5af92965e2c8a7afb3c1b9a5c09a263636",
"class_sub_shape_i_d_pair.html#abc493f2b834301d7787650dcf28752c1",
"class_transformed_shape.html#a9f0559c4106b9b17becd5f401389b354",
"class_vec3.html#a609366221e50c7b3134d80a80d963312",
"class_vehicle_controller_settings.html#a5ef4840b667224faf60f1d3cc2b048e1",
"functions_d.html",
"md__docs__release_notes.html#autotoc_md64",
"struct_compound_shape_1_1_collide_point_visitor.html#ac192bb3d8ea53f93de9e6fb523b2949a",
"struct_physics_update_context_1_1_step_1_1_c_c_d_body.html#ad8fd1d07aa868351147166971b648163"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';