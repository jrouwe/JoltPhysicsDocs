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
      [ "Multithreaded Access", "index.html#autotoc_md69", null ],
      [ "Single Threaded Access", "index.html#single-threaded-access", null ],
      [ "Shapes", "index.html#shapes", [
        [ "Dynamic Mesh Shapes", "index.html#dynamic-mesh-shapes", null ],
        [ "Creating Shapes", "index.html#creating-shapes", null ],
        [ "Saving Shapes", "index.html#saving-shapes", null ],
        [ "Convex Radius", "index.html#convex-radius", null ],
        [ "Center of Mass", "index.html#center-of-mass", null ],
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
      [ "General Controls", "md__docs__samples.html#autotoc_md44", null ],
      [ "The Tests", "md__docs__samples.html#autotoc_md45", [
        [ "Vehicles", "md__docs__samples.html#autotoc_md46", null ],
        [ "Rig (Ragdolls)", "md__docs__samples.html#autotoc_md47", null ],
        [ "Soft Body", "md__docs__samples.html#autotoc_md48", null ],
        [ "Character", "md__docs__samples.html#autotoc_md49", null ],
        [ "Water", "md__docs__samples.html#autotoc_md50", null ],
        [ "Constraints", "md__docs__samples.html#autotoc_md51", null ],
        [ "General", "md__docs__samples.html#autotoc_md52", null ],
        [ "Shapes & Scaled Shapes", "md__docs__samples.html#autotoc_md53", null ]
      ] ]
    ] ],
    [ "Performance Test", "md__docs__performance_test.html", [
      [ "Commandline options", "md__docs__performance_test.html#autotoc_md1", null ],
      [ "Output", "md__docs__performance_test.html#autotoc_md2", null ],
      [ "Results", "md__docs__performance_test.html#autotoc_md3", null ]
    ] ],
    [ "Release Notes", "md__docs__release_notes.html", [
      [ "v5.0.0", "md__docs__release_notes.html#autotoc_md13", [
        [ "New Functionality", "md__docs__release_notes.html#autotoc_md14", [
          [ "Soft Body", "md__docs__release_notes.html#autotoc_md15", null ],
          [ "Vehicles", "md__docs__release_notes.html#autotoc_md16", null ],
          [ "Character", "md__docs__release_notes.html#autotoc_md17", null ],
          [ "Constraints", "md__docs__release_notes.html#autotoc_md18", null ],
          [ "Collision Detection", "md__docs__release_notes.html#autotoc_md19", null ],
          [ "Simulation", "md__docs__release_notes.html#autotoc_md20", null ],
          [ "Various", "md__docs__release_notes.html#autotoc_md21", null ]
        ] ],
        [ "Removed functionality", "md__docs__release_notes.html#autotoc_md22", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md23", null ]
      ] ],
      [ "v4.0.2", "md__docs__release_notes.html#autotoc_md24", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md25", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md26", null ]
      ] ],
      [ "v4.0.1", "md__docs__release_notes.html#autotoc_md27", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md28", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md29", null ]
      ] ],
      [ "v4.0.0", "md__docs__release_notes.html#autotoc_md30", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md31", null ],
        [ "Removed functionality", "md__docs__release_notes.html#autotoc_md32", null ],
        [ "New supported platforms", "md__docs__release_notes.html#autotoc_md33", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md34", null ]
      ] ],
      [ "v3.0.0", "md__docs__release_notes.html#autotoc_md35", null ],
      [ "v2.0.1", "md__docs__release_notes.html#autotoc_md36", null ],
      [ "v2.0.0", "md__docs__release_notes.html#autotoc_md37", [
        [ "Major new functionality", "md__docs__release_notes.html#autotoc_md38", null ],
        [ "New supported compilers", "md__docs__release_notes.html#autotoc_md39", null ],
        [ "New supported platforms", "md__docs__release_notes.html#autotoc_md40", null ]
      ] ],
      [ "v1.1.0", "md__docs__release_notes.html#autotoc_md41", null ],
      [ "v1.0.0", "md__docs__release_notes.html#autotoc_md42", null ]
    ] ],
    [ "Breaking API Changes", "md__docs__a_p_i_changes.html", [
      [ "Changes between v4.0.2 and v5.0.0", "md__docs__a_p_i_changes.html#autotoc_md5", null ],
      [ "Changes between v4.0.0 and v4.0.2", "md__docs__a_p_i_changes.html#autotoc_md7", null ],
      [ "Changes between v3.0.1 and v4.0.0", "md__docs__a_p_i_changes.html#autotoc_md8", null ],
      [ "Changes between v2.0.1 and v3.0.0", "md__docs__a_p_i_changes.html#autotoc_md9", null ],
      [ "Changes between v1.1.0 and v2.0.0", "md__docs__a_p_i_changes.html#autotoc_md10", null ],
      [ "Changes between v1.0.0 and v1.1.0", "md__docs__a_p_i_changes.html#autotoc_md11", null ],
      [ "Changes between v0.0.0 and v1.0.0", "md__docs__a_p_i_changes.html#autotoc_md12", null ]
    ] ],
    [ "Building and Using Jolt Physics", "md__build__r_e_a_d_m_e.html", [
      [ "Build Types", "md__build__r_e_a_d_m_e.html#autotoc_md56", null ],
      [ "Includes", "md__build__r_e_a_d_m_e.html#autotoc_md57", null ],
      [ "Defines", "md__build__r_e_a_d_m_e.html#autotoc_md58", null ],
      [ "Logging & Asserting", "md__build__r_e_a_d_m_e.html#autotoc_md59", null ],
      [ "Custom Memory Allocator", "md__build__r_e_a_d_m_e.html#autotoc_md60", null ],
      [ "Building", "md__build__r_e_a_d_m_e.html#autotoc_md61", null ],
      [ "Other Build Tools", "md__build__r_e_a_d_m_e.html#autotoc_md62", null ],
      [ "Errors", "md__build__r_e_a_d_m_e.html#autotoc_md63", [
        [ "Link Error: File Format Not Recognized", "md__build__r_e_a_d_m_e.html#autotoc_md64", null ],
        [ "Link Error: Unresolved External Symbol", "md__build__r_e_a_d_m_e.html#autotoc_md65", null ],
        [ "DirectX Error", "md__build__r_e_a_d_m_e.html#autotoc_md66", null ],
        [ "Illegal Instruction Error", "md__build__r_e_a_d_m_e.html#autotoc_md67", null ]
      ] ],
      [ "Doxygen on Windows", "md__build__r_e_a_d_m_e.html#autotoc_md68", null ]
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
"_constraint_manager_8h_source.html",
"_indexed_triangle_8h_source.html",
"_path_constraint_8h.html#ad9f01f2f5231cdacf562f04aefbba51ba22d4f54f5a2001373cac7b8d8f246f11",
"_serializable_object_8h.html#a8d52ce16aca23d1e5a6933b4607f7f8a",
"_triangle_shape_8cpp.html",
"class_axis_constraint_part.html#a012581aad01dbf091d9f8e2cf0ea6605",
"class_body_interface.html#a97f114a5663f7a5e9461c73c01d4b2af",
"class_broad_phase_quad_tree.html#a7873fb8f52203413346e4ba2fbf6859c",
"class_collide_convex_vs_triangles.html#a76b3b285e2401983415ad2183e501655",
"class_constraint_manager.html#acd910b293c763c5c5a6f7c29a37721fb",
"class_cylinder_shape.html#ad1d58eeaca04307688a3fdd01daab299",
"class_default_object_layer_filter.html#a454d7b668f25a6301eba8a0a17276b79",
"class_get_triangles_context_vertex_list.html",
"class_job_system.html#a2bd7c3efdc8f934b728ee1787e0bd58e",
"class_matrix.html#a863621d29437a8ef7c38b3e214ca1f9c",
"class_object_layer_pair_filter_table.html#a24646de71a6a06550b0db5addf81b78e",
"class_physics_material_simple.html",
"class_quad_tree.html#ad70bd0403f84927b007159eeaebf85c1",
"class_ref_target_virtual.html#ac09162a129dc035c18ea99c7450aa94d",
"class_shape_filter.html",
"class_slider_constraint_settings.html#ab03298296694d483fbfc756c7b28433b",
"class_sphere_shape.html#a1941ec6970a8a1daf084f5cbbf173094",
"class_swing_twist_constraint_part.html#a901f23c5450f15ee2c8979776fcdbf15",
"class_triangle_splitter_binning.html#a528500c9d8c6ba8225ec945e135c9588",
"class_vec8.html",
"class_wheel.html#a7efe681ffa418ed0e1724fbc1fef7ec8",
"globals_func_o.html",
"struct_body_manager_1_1_draw_settings.html#aae6f634585850b102c3f276302d0d4a7",
"struct_mesh_shape_1_1_m_s_get_triangles_context.html#a1ad05ea27186c07aebbc4f6d99bc859c",
"struct_transformed_convex_object.html#a0fa745b8d15e71629ebb719716d16fa8"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';