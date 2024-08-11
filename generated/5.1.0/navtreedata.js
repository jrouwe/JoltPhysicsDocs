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
      [ "Multithreaded Access", "index.html#autotoc_md78", null ],
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
      [ "General Controls", "md__docs__samples.html#autotoc_md8", null ],
      [ "The Tests", "md__docs__samples.html#autotoc_md10", [
        [ "Vehicles", "md__docs__samples.html#autotoc_md11", null ],
        [ "Rig (Ragdolls)", "md__docs__samples.html#autotoc_md12", null ],
        [ "Soft Body", "md__docs__samples.html#autotoc_md13", null ],
        [ "Character", "md__docs__samples.html#autotoc_md14", null ],
        [ "Water", "md__docs__samples.html#autotoc_md15", null ],
        [ "Constraints", "md__docs__samples.html#autotoc_md16", null ],
        [ "General", "md__docs__samples.html#autotoc_md17", null ],
        [ "Shapes & Scaled Shapes", "md__docs__samples.html#autotoc_md18", null ]
      ] ]
    ] ],
    [ "Performance Test", "md__docs__performance_test.html", [
      [ "Commandline options", "md__docs__performance_test.html#autotoc_md2", null ],
      [ "Output", "md__docs__performance_test.html#autotoc_md3", null ],
      [ "Results", "md__docs__performance_test.html#autotoc_md4", null ]
    ] ],
    [ "Release Notes", "md__docs__release_notes.html", [
      [ "v5.1.0", "md__docs__release_notes.html#autotoc_md23", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md24", [
          [ "Soft Body", "md__docs__release_notes.html#autotoc_md25", null ],
          [ "HeightField Shape", "md__docs__release_notes.html#autotoc_md26", null ],
          [ "Character", "md__docs__release_notes.html#autotoc_md31", null ],
          [ "Vehicles", "md__docs__release_notes.html#autotoc_md32", null ],
          [ "Various", "md__docs__release_notes.html#autotoc_md33", null ]
        ] ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md36", null ]
      ] ],
      [ "v5.0.0", "md__docs__release_notes.html#autotoc_md42", [
        [ "New Functionality", "md__docs__release_notes.html#autotoc_md45", [
          [ "Soft Body", "md__docs__release_notes.html#autotoc_md47", null ],
          [ "Vehicles", "md__docs__release_notes.html#autotoc_md48", null ],
          [ "Character", "md__docs__release_notes.html#autotoc_md49", null ],
          [ "Constraints", "md__docs__release_notes.html#autotoc_md51", null ],
          [ "Collision Detection", "md__docs__release_notes.html#autotoc_md52", null ],
          [ "Simulation", "md__docs__release_notes.html#autotoc_md55", null ],
          [ "Various", "md__docs__release_notes.html#autotoc_md56", null ]
        ] ],
        [ "Removed functionality", "md__docs__release_notes.html#autotoc_md57", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md58", null ]
      ] ],
      [ "v4.0.2", "md__docs__release_notes.html#autotoc_md59", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md60", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md61", null ]
      ] ],
      [ "v4.0.1", "md__docs__release_notes.html#autotoc_md62", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md63", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md64", null ]
      ] ],
      [ "v4.0.0", "md__docs__release_notes.html#autotoc_md65", [
        [ "New functionality", "md__docs__release_notes.html#autotoc_md66", null ],
        [ "Removed functionality", "md__docs__release_notes.html#autotoc_md67", null ],
        [ "New supported platforms", "md__docs__release_notes.html#autotoc_md68", null ],
        [ "Bug fixes", "md__docs__release_notes.html#autotoc_md69", null ]
      ] ],
      [ "v3.0.0", "md__docs__release_notes.html#autotoc_md70", null ],
      [ "v2.0.1", "md__docs__release_notes.html#autotoc_md71", null ],
      [ "v2.0.0", "md__docs__release_notes.html#autotoc_md72", [
        [ "Major new functionality", "md__docs__release_notes.html#autotoc_md73", null ],
        [ "New supported compilers", "md__docs__release_notes.html#autotoc_md74", null ],
        [ "New supported platforms", "md__docs__release_notes.html#autotoc_md75", null ]
      ] ],
      [ "v1.1.0", "md__docs__release_notes.html#autotoc_md76", null ],
      [ "v1.0.0", "md__docs__release_notes.html#autotoc_md77", null ]
    ] ],
    [ "Breaking API Changes", "md__docs__a_p_i_changes.html", [
      [ "Changes between v5.0.0 and v5.1.0", "md__docs__a_p_i_changes.html#autotoc_md22", null ],
      [ "Changes between v4.0.2 and v5.0.0", "md__docs__a_p_i_changes.html#autotoc_md28", null ],
      [ "Changes between v4.0.0 and v4.0.2", "md__docs__a_p_i_changes.html#autotoc_md34", null ],
      [ "Changes between v3.0.1 and v4.0.0", "md__docs__a_p_i_changes.html#autotoc_md35", null ],
      [ "Changes between v2.0.1 and v3.0.0", "md__docs__a_p_i_changes.html#autotoc_md43", null ],
      [ "Changes between v1.1.0 and v2.0.0", "md__docs__a_p_i_changes.html#autotoc_md50", null ],
      [ "Changes between v1.0.0 and v1.1.0", "md__docs__a_p_i_changes.html#autotoc_md53", null ],
      [ "Changes between v0.0.0 and v1.0.0", "md__docs__a_p_i_changes.html#autotoc_md54", null ]
    ] ],
    [ "Building and Using Jolt Physics", "md__build__r_e_a_d_m_e.html", [
      [ "Build Types", "md__build__r_e_a_d_m_e.html#autotoc_md19", null ],
      [ "Includes", "md__build__r_e_a_d_m_e.html#autotoc_md20", null ],
      [ "Defines", "md__build__r_e_a_d_m_e.html#autotoc_md21", null ],
      [ "Logging & Asserting", "md__build__r_e_a_d_m_e.html#autotoc_md27", null ],
      [ "Custom Memory Allocator", "md__build__r_e_a_d_m_e.html#autotoc_md29", null ],
      [ "Building", "md__build__r_e_a_d_m_e.html#autotoc_md30", null ],
      [ "Other Build Tools", "md__build__r_e_a_d_m_e.html#autotoc_md37", null ],
      [ "Errors", "md__build__r_e_a_d_m_e.html#autotoc_md38", [
        [ "Link Error: File Format Not Recognized", "md__build__r_e_a_d_m_e.html#autotoc_md39", null ],
        [ "Link Error: Unresolved External Symbol", "md__build__r_e_a_d_m_e.html#autotoc_md40", null ],
        [ "DirectX Error", "md__build__r_e_a_d_m_e.html#autotoc_md41", null ],
        [ "Illegal Instruction Error", "md__build__r_e_a_d_m_e.html#autotoc_md44", null ]
      ] ],
      [ "Doxygen on Windows", "md__build__r_e_a_d_m_e.html#autotoc_md46", null ]
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
"_constraint_8h.html#adfc8350888df0c3a51714b7f372baf2dae5d2ad241ec44cf155bc78ae8d11f715",
"_hinge_constraint_8h_source.html",
"_offset_center_of_mass_shape_8cpp.html",
"_serializable_attribute_8h.html#a1c4e088742cfa4700da8d88eacf5974aa988ddd4859f990b5618fb95f0dbfdaf6",
"_tracked_vehicle_controller_8h.html",
"class_angle_constraint_part.html#a11bb8ed0daf36021dc407fd13cbfde90",
"class_body_draw_filter.html",
"class_broad_phase.html#a031638360b44d1a9b2176590796eb2a6",
"class_character_contact_listener.html#a46fc7a819cf904aa3db5cf1648f21530",
"class_compound_shape.html#a596eae9a25f8ed13ac35f2a58b318368",
"class_convex_hull_shape.html#a6c4c9fd637e19f6d7d7aa32a0389a6a6",
"class_debug_renderer.html#a0caa614c01a9879eed46e55755884c75",
"class_fixed_constraint.html#a1f2e160cf0bac4e5a08a10a4db32fe27",
"class_hinge_constraint_settings.html#ac470570dce09cb9de0d81194e023145c",
"class_large_island_splitter_1_1_splits.html#a9a7977a12a99fe498e1ca8445eb73409",
"class_motion_properties.html#afb12aa823a651145b46b271570a7af59",
"class_object_stream_text_out.html#abcd26a7be4af7a8c2e5240d173bb8622",
"class_plane.html#a23c3f6c2eaf6344447cb5e0a8a52d63d",
"class_rack_and_pinion_constraint_settings.html#a13d28a9be1de9f098094d5b06d2b21a6",
"class_s_t_l_allocator.html#affd8ec6c0ff2ea46a895cd9a6ca5ab7e",
"class_skeletal_animation.html#a2af19e78e177662f1f8c3c3e5924d55e",
"class_soft_body_motion_properties.html#af56ddceaa1945447bf214647d44ca8f1",
"class_static_array.html#a86389c0d1eb544f4c0e202693eff70ba",
"class_tracked_vehicle_controller.html#acbb1cc373f9ca7da7c9d79bf8195b257",
"class_u_vec8.html#a364573a06edffdbc4b6bcf321932aa2f",
"class_vehicle_constraint.html#a205699c8c9916b774790a8f87a43d61c",
"class_wheeled_vehicle_controller.html#a459374f72146ee0bfe05ead3151d346c",
"md__build__r_e_a_d_m_e.html",
"struct_compound_shape_1_1_cast_ray_visitor_collector.html#a27e6f90c97311cb2274d1c15b7088367",
"struct_physics_update_context_1_1_step.html#a0a81eaf0dd6d5042c7ad171c626b8ecb"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';