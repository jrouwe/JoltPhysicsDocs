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
      [ "General Controls", "md__docs__samples.html#autotoc_md5", null ],
      [ "The Tests", "md__docs__samples.html#autotoc_md6", [
        [ "Vehicles", "md__docs__samples.html#autotoc_md7", null ],
        [ "Rig (Ragdolls)", "md__docs__samples.html#autotoc_md8", null ],
        [ "Soft Body", "md__docs__samples.html#autotoc_md9", null ],
        [ "Character", "md__docs__samples.html#autotoc_md10", null ],
        [ "Water", "md__docs__samples.html#autotoc_md13", null ],
        [ "Constraints", "md__docs__samples.html#autotoc_md15", null ],
        [ "General", "md__docs__samples.html#autotoc_md16", null ],
        [ "Shapes & Scaled Shapes", "md__docs__samples.html#autotoc_md17", null ]
      ] ]
    ] ],
    [ "Performance Test", "md__docs__performance_test.html", [
      [ "Commandline options", "md__docs__performance_test.html#autotoc_md2", null ],
      [ "Output", "md__docs__performance_test.html#autotoc_md3", null ],
      [ "Results", "md__docs__performance_test.html#autotoc_md4", null ]
    ] ],
    [ "Release Notes", "md__docs__release_notes.html", [
      [ "v5.4.0", "md__docs__release_notes.html#autotoc_md44", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md45", null ],
        [ "Bug Fixes", "md__docs__release_notes.html#autotoc_md46", null ]
      ] ],
      [ "v5.3.0", "md__docs__release_notes.html#autotoc_md47", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md48", [
          [ "Samples", "md__docs__release_notes.html#autotoc_md49", null ],
          [ "MeshShape", "md__docs__release_notes.html#autotoc_md50", null ],
          [ "Character", "md__docs__release_notes.html#autotoc_md51", null ],
          [ "Collision Detection", "md__docs__release_notes.html#autotoc_md52", null ],
          [ "New Platforms", "md__docs__release_notes.html#autotoc_md53", null ],
          [ "Various", "md__docs__release_notes.html#autotoc_md54", null ]
        ] ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md55", null ]
      ] ],
      [ "v5.2.0", "md__docs__release_notes.html#autotoc_md56", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md57", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md58", null ]
      ] ],
      [ "v5.1.0", "md__docs__release_notes.html#autotoc_md59", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md60", [
          [ "Soft Body", "md__docs__release_notes.html#autotoc_md61", null ],
          [ "HeightField Shape", "md__docs__release_notes.html#autotoc_md62", null ],
          [ "Character", "md__docs__release_notes.html#autotoc_md63", null ],
          [ "Vehicles", "md__docs__release_notes.html#autotoc_md64", null ],
          [ "Various", "md__docs__release_notes.html#autotoc_md65", null ]
        ] ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md66", null ]
      ] ],
      [ "v5.0.0", "md__docs__release_notes.html#autotoc_md67", [
        [ "New Functionality", "md__docs__release_notes.html#autotoc_md68", [
          [ "Soft Body", "md__docs__release_notes.html#autotoc_md69", null ],
          [ "Vehicles", "md__docs__release_notes.html#autotoc_md70", null ],
          [ "Character", "md__docs__release_notes.html#autotoc_md71", null ],
          [ "Constraints", "md__docs__release_notes.html#autotoc_md72", null ],
          [ "Collision Detection", "md__docs__release_notes.html#autotoc_md73", null ],
          [ "Simulation", "md__docs__release_notes.html#autotoc_md74", null ],
          [ "Various", "md__docs__release_notes.html#autotoc_md75", null ]
        ] ],
        [ "Removed functionality", "md__docs__release_notes.html#autotoc_md76", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md77", null ]
      ] ],
      [ "v4.0.2", "md__docs__release_notes.html#autotoc_md78", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md79", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md80", null ]
      ] ],
      [ "v4.0.1", "md__docs__release_notes.html#autotoc_md81", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md82", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md83", null ]
      ] ],
      [ "v4.0.0", "md__docs__release_notes.html#autotoc_md84", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md85", null ],
        [ "Removed functionality", "md__docs__release_notes.html#autotoc_md86", null ],
        [ "New supported platforms", "md__docs__release_notes.html#autotoc_md87", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md88", null ]
      ] ],
      [ "v3.0.0", "md__docs__release_notes.html#autotoc_md89", null ],
      [ "v2.0.1", "md__docs__release_notes.html#autotoc_md90", null ],
      [ "v2.0.0", "md__docs__release_notes.html#autotoc_md91", [
        [ "Major new functionality", "md__docs__release_notes.html#autotoc_md92", null ],
        [ "New supported compilers", "md__docs__release_notes.html#autotoc_md93", null ],
        [ "New supported platforms", "md__docs__release_notes.html#autotoc_md94", null ]
      ] ],
      [ "v1.1.0", "md__docs__release_notes.html#autotoc_md95", null ],
      [ "v1.0.0", "md__docs__release_notes.html#autotoc_md96", null ]
    ] ],
    [ "Breaking API Changes", "md__docs__a_p_i_changes.html", [
      [ "Changes between v5.3.0 and v5.4.0", "md__docs__a_p_i_changes.html#autotoc_md22", null ],
      [ "Changes between v5.2.0 and v5.3.0", "md__docs__a_p_i_changes.html#autotoc_md26", null ],
      [ "Changes between v5.1.0 and v5.2.0", "md__docs__a_p_i_changes.html#autotoc_md27", null ],
      [ "Changes between v5.0.0 and v5.1.0", "md__docs__a_p_i_changes.html#autotoc_md28", null ],
      [ "Changes between v4.0.2 and v5.0.0", "md__docs__a_p_i_changes.html#autotoc_md37", null ],
      [ "Changes between v4.0.0 and v4.0.2", "md__docs__a_p_i_changes.html#autotoc_md38", null ],
      [ "Changes between v3.0.1 and v4.0.0", "md__docs__a_p_i_changes.html#autotoc_md39", null ],
      [ "Changes between v2.0.1 and v3.0.0", "md__docs__a_p_i_changes.html#autotoc_md40", null ],
      [ "Changes between v1.1.0 and v2.0.0", "md__docs__a_p_i_changes.html#autotoc_md41", null ],
      [ "Changes between v1.0.0 and v1.1.0", "md__docs__a_p_i_changes.html#autotoc_md42", null ],
      [ "Changes between v0.0.0 and v1.0.0", "md__docs__a_p_i_changes.html#autotoc_md43", null ]
    ] ],
    [ "Building and Using Jolt Physics", "md__build__r_e_a_d_m_e.html", [
      [ "Build Types", "md__build__r_e_a_d_m_e.html#autotoc_md19", null ],
      [ "Includes", "md__build__r_e_a_d_m_e.html#autotoc_md20", null ],
      [ "Defines", "md__build__r_e_a_d_m_e.html#autotoc_md21", null ],
      [ "Logging & Asserting", "md__build__r_e_a_d_m_e.html#autotoc_md23", null ],
      [ "Custom Memory Allocator", "md__build__r_e_a_d_m_e.html#autotoc_md24", null ],
      [ "Building", "md__build__r_e_a_d_m_e.html#autotoc_md25", null ],
      [ "Other Build Tools", "md__build__r_e_a_d_m_e.html#autotoc_md29", null ],
      [ "Errors", "md__build__r_e_a_d_m_e.html#autotoc_md30", [
        [ "Link Error: File Format Not Recognized", "md__build__r_e_a_d_m_e.html#autotoc_md31", null ],
        [ "Link Error: Unresolved External Symbol", "md__build__r_e_a_d_m_e.html#autotoc_md32", null ],
        [ "Link Error: Undefined Symbol", "md__build__r_e_a_d_m_e.html#autotoc_md33", null ],
        [ "DirectX Error", "md__build__r_e_a_d_m_e.html#autotoc_md34", null ],
        [ "Illegal Instruction Error", "md__build__r_e_a_d_m_e.html#autotoc_md35", null ]
      ] ],
      [ "Doxygen on Windows", "md__build__r_e_a_d_m_e.html#autotoc_md36", null ]
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
"_object_stream_binary_out_8cpp.html",
"_scale_helpers_8h.html#a968d814e04071d431f79a2ba4e9d4da1",
"_string_tools_8cpp.html#a479eac2df35b47887f8dbfa014f6923d",
"class_a_a_box.html#a8431a72347bfdb1a77ae45dcbba9c35b",
"class_body.html#a87c94617c51d1d35e49b64b0a29d18a4",
"class_body_lock_interface_no_lock.html#a502df83afc4e8e8e77d7a8b2993c1f8e",
"class_capsule_shape.html#af2943e795c49300d95d68950231de8a3",
"class_character_vs_character_collision_simple.html#a63d4e54dee0aca96e4c77e7c78a6b350",
"class_cone_constraint_settings.html#ac9831884f13146df159980ce13a7f108",
"class_convex_shape.html#aa0989125373d245ea41cbf5c1db96198",
"class_debug_renderer_1_1_vertex.html#a8dd2a6d51a9370b7c7a2a09d482f1414",
"class_fixed_size_free_list.html#a0bf25bd9e2c35e584e0bc14d40054bc2",
"class_hinge_constraint.html#aa6308f0b4983d8bfb2e835fea7cc28b7",
"class_l_f_h_m_allocator.html#a9eda23a0f8dd6fac54adab81b97e7c60",
"class_motion_properties.html#a58dc89a83d8c4dc28bd5f6e8c0ed35c8",
"class_object_stream_out.html",
"class_physics_system.html#a35474557b977d2a03e7b5e7c920bf2ee",
"class_quad_tree.html#aec53c63c36f1185bd75623cbc27830d6",
"class_ref_target_virtual.html",
"class_shape.html#a4b4b180a41ffdf7369f79706b0e27570",
"class_skeleton_pose.html#a2e60e72ebf66740c7d9d99274b70efe7",
"class_soft_body_shared_settings_1_1_inv_bind.html",
"class_stream_out.html#a30c9fa2d50a64c0da4d6dc5ae614e756",
"class_tracked_vehicle_controller.html#a1488f414bfa1cd59e4165b1157e42858",
"class_u_vec4.html#ab2f2894975c86cd37303d8454aa37fcf",
"class_vehicle_constraint.html#a0d1c3ba4aa13f74349f51e3af74466ab",
"class_wheeled_vehicle_controller.html#a18c2ead8335924c4225b2580b2fd6f31",
"index.html#integrate-and-clamp-velocities",
"struct_body_pair.html#aeb1186aac2ffbb99da346a15569f1855",
"struct_mesh_shape_1_1_m_s_get_triangles_context.html#a4e096804b145a331076fc7b8102bc7e4",
"struct_soft_body_shared_settings_1_1_vertex.html#ade523b548f25eefba83b33cc7632ee52"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';