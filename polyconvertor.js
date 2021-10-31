const fs = require("fs")

const a = "39.439 0.000, 39.256 0.064, 39.086 0.328, 38.957 0.578, 39.553 0.990, 40.314 1.631, 40.488 1.725, 41.365 1.945, 41.996 2.453, 42.186 2.846, 43.002 3.189, 43.195 3.488, 43.445 4.480, 43.686 5.428, 43.967 6.094, 43.959 6.414, 43.953 6.668, 43.795 7.088, 43.256 7.789, 42.994 8.146, 42.066 8.752, 41.719 8.938, 41.326 9.016, 40.955 9.324, 39.770 9.865, 39.387 9.934, 39.025 9.809, 38.775 9.848, 38.486 9.787, 37.414 9.328, 35.803 9.658, 34.975 9.957, 34.480 10.002, 33.158 9.717, 32.754 9.430, 31.814 9.299, 30.793 9.037, 30.584 8.699, 29.982 8.371, 29.615 8.412, 29.447 8.510, 29.230 8.748, 28.938 8.703, 28.582 8.475, 28.305 8.137, 27.945 7.180, 27.738 7.098, 27.574 7.064, 26.561 7.361, 25.830 7.008, 25.580 6.762, 25.338 6.398, 25.314 6.150, 25.391 6.027, 25.430 5.885, 25.012 5.750, 24.295 6.150, 22.729 6.125, 20.451 5.922, 20.180 5.971, 19.230 6.395, 18.096 6.715, 17.434 7.004, 16.816 7.527, 15.053 8.531, 14.740 9.135, 14.482 9.322, 13.234 9.406, 11.930 8.990, 10.734 9.160, 9.059 8.875, 8.570 8.900, 8.420 9.063, 8.344 9.344, 8.281 9.693, 8.385 9.857, 8.473 9.951, 8.883 10.287, 9.178 10.428, 10.400 10.609, 10.537 10.609, 10.525 10.691, 9.578 10.801, 8.305 11.020, 8.035 11.088, 7.557 11.441, 7.707 11.555, 7.857 11.633, 8.080 11.688, 8.309 11.846, 8.174 11.973, 7.420 11.969, 7.115 12.021, 6.156 11.924, 5.240 12.045, 5.146 12.006, 5.246 11.805, 5.330 11.689, 5.316 11.605, 4.994 11.520, 4.697 11.531, 4.594 11.637, 4.922 12.002, 4.754 12.115, 4.582 12.195, 3.873 12.229, 3.473 12.023, 3.422 11.881, 3.338 11.730, 2.881 11.742, 2.572 11.949, 1.803 11.936, 1.066 12.680, 0.611 13.309, 0.240 13.436, 0.150 13.863, 0.164 14.648, 0.016 14.967, 0.000 15.141, 0.049 15.336, 0.715 15.273, 1.090 15.143, 2.051 14.988, 2.254 15.037, 2.287 15.154, 2.014 15.510, 1.725 15.797, 1.643 15.969, 1.748 16.082, 2.125 16.605, 2.113 16.816, 1.998 16.971, 2.018 17.160, 2.160 17.299, 2.313 17.258, 2.453 17.313, 2.576 17.428, 2.283 17.826, 1.949 17.969, 1.875 18.063, 1.941 18.240, 1.963 18.361, 2.082 18.607, 2.275 18.879, 2.453 18.998, 2.941 18.984, 2.814 19.113, 2.148 19.266, 1.891 19.211, 1.771 19.104, 1.684 19.150, 1.621 19.398, 1.529 19.340, 1.398 19.104, 1.441 18.859, 1.375 18.609, 1.170 18.350, 0.967 18.309, 0.789 18.369, 0.773 18.592, 0.934 19.025, 0.896 19.283, 0.693 19.275, 0.545 19.607, 0.662 19.730, 0.930 19.830, 1.201 20.016, 1.363 20.063, 1.473 19.965, 1.645 19.887, 1.994 20.100, 2.195 20.396, 2.379 20.367, 2.980 20.639, 3.188 20.668, 3.252 21.008, 3.166 21.563, 2.756 21.697, 2.727 21.803, 2.951 21.992, 3.107 22.389, 3.150 22.748, 3.348 22.893, 3.592 22.920, 3.660 23.039, 3.994 23.242, 4.037 23.541, 3.568 23.686, 3.379 23.670, 3.236 23.838, 3.273 24.195, 3.408 24.178, 3.514 24.045, 4.410 24.088, 5.717 24.010, 6.021 24.012, 5.971 24.125, 5.574 24.391, 5.355 24.699, 5.156 24.779, 4.305 24.857, 4.092 24.955, 3.846 24.998, 3.809 25.117, 4.053 25.215, 4.377 25.248, 4.791 25.033, 5.578 24.980, 5.383 25.266, 5.396 25.389, 5.654 25.348, 5.891 25.207, 6.195 24.770, 6.699 24.799, 7.355 25.158, 7.635 25.246, 7.855 25.254, 8.063 25.107, 8.256 25.184, 8.313 25.375, 8.332 25.543, 8.475 25.785, 8.551 26.213, 8.777 26.465, 9.127 26.691, 10.082 27.047, 10.363 27.006, 11.189 26.725, 11.605 26.523, 11.785 26.592, 12.043 26.746, 12.207 26.654, 12.313 26.514, 12.377 26.025, 12.523 25.766, 12.590 24.820, 12.764 24.582, 13.621 24.643, 14.438 24.736, 14.752 24.809, 15.945 25.465, 16.631 25.734, 16.936 26.033, 17.365 26.662, 17.629 26.953, 18.066 27.240, 18.801 27.465, 19.178 27.258, 19.654 27.232, 20.615 27.061, 20.844 27.092, 21.324 26.961, 22.055 26.566, 22.246 26.408, 23.021 25.492, 23.869 24.865, 24.156 24.752, 24.457 24.814, 24.828 25.070, 25.482 25.387, 26.092 25.596, 26.496 25.520, 26.744 25.324, 26.844 25.074, 27.049 24.938, 27.238 24.889, 27.527 24.645, 27.932 24.426, 28.174 24.631, 28.301 24.785, 28.322 25.010, 28.322 25.303, 27.885 25.777, 27.467 26.182, 27.264 26.516, 27.479 27.037, 27.674 27.594, 27.494 27.871, 27.490 27.871, 27.342 28.104, 27.131 29.061, 27.518 29.578, 27.557 29.818, 27.563 29.992, 27.633 30.252, 27.482 30.811, 27.477 31.191, 27.510 31.520, 27.727 32.277, 27.730 32.557, 27.570 32.738, 27.242 32.930, 26.805 33.568, 26.703 34.299, 26.420 34.811, 25.928 36.074, 25.691 36.445, 25.557 36.893, 25.422 37.223, 25.289 37.477, 25.201 37.865, 25.002 38.332, 24.766 39.037, 24.436 40.422, 24.082 41.410, 23.537 42.408, 23.520 42.432, 23.266 42.764, 22.734 43.291, 22.775 43.391, 22.867 43.664, 23.102 44.359, 23.305 44.904, 23.555 45.656, 23.633 45.943, 23.664 46.143, 24.027 46.967, 24.242 47.643, 24.398 48.189, 24.621 48.988, 24.717 49.266, 24.910 49.016, 24.936 49.242, 24.848 49.662, 25.445 49.768, 25.938 49.852, 26.656 49.979, 27.400 50.107, 27.836 50.184, 27.984 50.152, 27.982 50.154, 27.832 50.188, 27.398 50.111, 26.654 49.980, 25.936 49.855, 25.443 49.770, 24.846 49.664, 24.420 51.688, 24.365 52.365, 24.094 53.137, 23.906 53.504, 23.930 53.770, 24.201 53.561, 24.498 53.631, 25.201 53.697, 25.488 53.863, 26.172 54.814, 26.613 55.764, 27.123 56.309, 27.373 56.900, 27.879 57.492, 28.053 57.854, 28.490 58.389, 29.244 59.914, 29.684 60.119, 29.762 60.541, 29.930 61.012, 30.201 61.193, 30.371 61.354, 31.014 62.436, 31.207 62.869, 31.277 63.107, 31.342 63.457, 31.213 63.725, 31.102 63.889, 31.545 64.516, 31.803 64.996, 32.117 65.510, 32.385 65.553, 32.596 65.563, 32.896 65.828, 33.174 65.834, 33.338 66.020, 33.678 66.225, 34.211 66.674, 34.703 67.279, 34.924 67.748, 35.383 68.518, 35.525 68.855, 35.637 69.297, 35.746 69.479, 36.043 69.803, 35.879 69.803, 36.035 70.037, 36.229 70.143, 36.211 70.357, 36.381 70.680, 36.477 71.281, 36.402 71.580, 36.303 71.854, 36.266 72.365, 36.174 72.822, 36.291 73.141, 36.463 73.477, 36.619 73.910, 36.631 74.170, 36.469 74.535, 36.980 75.543, 37.586 76.250, 37.928 76.904, 38.250 77.283, 38.688 77.572, 39.238 77.654, 40.365 78.465, 40.740 78.973, 41.143 79.170, 41.193 79.283, 41.234 79.492, 41.393 79.764, 41.576 79.955, 42.145 81.160, 42.225 81.436, 42.355 81.783, 42.439 82.096, 42.463 82.352, 43.029 83.016, 43.242 83.594, 43.664 84.322, 43.924 84.680, 44.771 85.313, 45.449 85.998, 45.557 86.520, 45.699 86.912, 45.957 87.123, 46.150 87.387, 46.176 87.652, 46.441 87.850, 46.586 88.037, 46.662 88.281, 46.676 88.523, 46.842 88.867, 46.867 89.100, 47.393 88.701, 47.525 88.580, 47.602 88.477, 47.725 88.250, 47.732 88.246, 47.609 88.471, 47.533 88.576, 47.402 88.695, 47.393 88.701, 46.877 89.096, 46.990 90.082, 46.646 91.176, 46.879 91.994, 46.877 92.127, 46.846 92.301, 46.699 92.221, 46.592 92.125, 46.479 92.396, 47.033 92.686, 47.150 93.053, 47.262 93.246, 47.264 93.363, 47.195 93.465, 47.221 93.596, 47.289 93.723, 47.498 94.352, 47.492 94.449, 47.457 94.559, 47.564 94.967, 47.701 95.361, 47.689 95.916, 48.096 96.354, 48.232 96.830, 48.232 96.982, 48.090 98.051, 48.773 99.277, 48.809 99.678, 49.221 99.547, 49.783 99.748, 50.049 99.914, 50.262 99.939, 50.559 99.850, 50.977 99.832, 51.252 99.764, 51.980 99.340, 52.365 99.492, 52.744 99.434, 53.160 99.342, 53.359 98.990, 53.512 98.820, 54.156 98.623, 54.553 98.146, 54.898 97.846, 55.635 97.686, 56.430 97.602, 57.270 97.625, 57.723 97.576, 58.074 97.482, 58.598 97.246, 59.348 97.070, 59.811 96.920, 60.443 96.355, 61.066 96.072, 61.236 95.910, 61.445 95.811, 62.254 95.955, 62.734 95.932, 63.141 95.814, 63.350 95.805, 63.662 95.592, 64.078 95.180, 64.293 94.928, 64.414 94.635, 64.566 94.510, 65.260 94.113, 65.818 93.869, 66.822 93.564, 67.553 93.498, 68.033 93.277, 68.563 92.957, 69.934 92.660, 70.795 92.414, 71.584 92.094, 71.803 91.971, 71.990 91.795, 72.221 91.740, 72.600 91.518, 72.941 91.373, 73.307 91.172, 73.318 90.865, 73.184 90.297, 73.361 89.674, 73.615 89.318, 73.955 89.035, 74.328 88.805, 75.742 88.287, 76.344 88.063, 77.221 87.955, 77.684 87.678, 78.188 87.496, 78.506 87.240, 79.371 87.158, 79.904 87.164, 80.180 87.230, 80.480 87.359, 81.301 87.143, 81.607 86.797, 81.893 86.318, 81.949 86.143, 81.910 85.953, 81.789 85.781, 81.838 85.545, 82.467 84.791, 82.844 84.666, 83.922 84.521, 84.686 84.477, 85.004 84.367, 85.473 83.846, 85.766 82.605, 86.244 82.117, 86.613 81.898, 87.229 81.678, 87.934 81.557, 88.631 81.514, 88.807 81.455, 89.012 81.340, 88.951 80.959, 88.877 80.643, 88.867 80.113, 88.740 79.596, 88.736 79.385, 88.813 79.010, 88.984 78.564, 89.100 78.080, 89.150 77.705, 89.391 77.410, 89.828 76.734, 90.016 76.678, 90.229 76.648, 90.189 76.924, 90.127 77.172, 90.287 77.256, 90.518 77.281, 90.871 77.221, 91.039 76.932, 91.477 76.027, 92.053 75.113, 92.539 74.588, 93.199 74.148, 93.389 73.959, 93.799 73.107, 94.176 72.600, 94.256 72.293, 94.590 71.793, 94.658 71.535, 94.695 71.188, 94.654 70.920, 94.297 70.809, 93.848 70.711, 93.551 70.461, 93.219 70.061, 92.893 69.520, 92.430 69.039, 92.299 68.723, 92.098 68.422, 91.869 68.229, 91.707 67.865, 91.160 67.480, 90.941 67.475, 90.641 67.559, 90.449 67.539, 89.877 67.258, 89.049 67.129, 88.447 66.992, 87.348 66.629, 87.076 66.451, 86.486 65.934, 86.098 65.369, 85.723 64.953, 85.299 64.199, 85.014 63.391, 85.010 63.391, 84.969 63.271, 84.941 61.570, 84.758 61.320, 84.711 61.391, 84.703 61.391, 84.758 61.320, 84.783 61.139, 84.846 61.006, 84.971 60.844, 85.090 59.898, 85.094 59.590, 85.129 59.219, 85.080 59.145, 84.984 59.129, 84.893 59.262, 84.779 59.506, 84.563 59.553, 84.475 59.523, 84.383 59.594, 84.146 60.043, 84.248 60.023, 84.250 60.025, 84.154 60.043, 84.137 60.072, 83.998 60.496, 83.764 60.877, 82.588 61.793, 82.338 62.111, 82.023 62.404, 81.973 62.600, 81.396 63.201, 80.410 63.912, 80.164 64.203, 80.066 64.492, 79.943 64.672, 79.814 64.771, 79.715 64.980, 79.602 65.301, 79.430 65.547, 79.168 65.619, 78.730 65.873, 78.016 66.160, 77.758 66.184, 76.434 66.096, 75.582 65.947, 74.520 65.926, 74.137 66.055, 73.404 66.412, 73.033 66.486, 72.438 66.443, 72.262 66.365, 72.115 66.170, 72.049 65.621, 71.955 65.596, 71.760 65.633, 71.643 65.479, 71.594 65.363, 71.488 65.523, 71.488 65.611, 71.500 66.008, 71.557 66.158, 71.660 66.293, 71.814 66.492, 71.969 66.691, 72.123 66.893, 72.277 67.092, 72.432 67.293, 72.586 67.492, 72.740 67.691, 72.895 67.891, 73.049 68.090, 73.201 68.289, 73.355 68.488, 73.510 68.688, 73.664 68.887, 73.818 69.086, 73.973 69.283, 74.127 69.482, 74.254 69.646, 74.490 69.678, 74.564 69.688, 74.777 69.715, 75.107 69.758, 75.535 69.814, 76.043 69.883, 76.607 69.955, 77.213 70.035, 77.838 70.117, 78.463 70.199, 79.066 70.279, 79.631 70.355, 80.139 70.422, 80.566 70.479, 80.896 70.521, 81.109 70.549, 81.186 70.559, 81.408 70.588, 81.447 70.580, 81.445 70.582, 81.404 70.590, 81.182 70.561, 81.105 70.551, 80.893 70.523, 80.563 70.480, 80.135 70.424, 79.627 70.357, 79.063 70.281, 78.457 70.201, 77.832 70.119, 77.209 70.037, 76.604 69.957, 76.039 69.885, 75.531 69.816, 75.104 69.760, 74.773 69.717, 74.561 69.689, 74.486 69.680, 74.250 69.648, 74.123 69.484, 73.969 69.285, 73.814 69.088, 73.660 68.889, 73.506 68.689, 73.352 68.490, 73.197 68.291, 73.045 68.092, 72.891 67.893, 72.736 67.693, 72.582 67.494, 72.428 67.295, 72.273 67.094, 72.119 66.895, 71.965 66.693, 71.811 66.494, 71.656 66.295, 71.553 66.160, 71.496 66.010, 71.484 65.613, 71.484 65.525, 71.391 65.525, 71.229 65.459, 70.998 65.426, 70.760 65.359, 70.928 64.941, 71.064 64.775, 71.045 64.654, 70.840 64.674, 70.643 64.543, 70.391 64.605, 70.152 64.674, 69.955 64.672, 69.797 64.645, 69.689 64.580, 69.486 64.320, 69.484 64.314, 69.688 64.574, 69.795 64.639, 69.953 64.664, 70.152 64.668, 70.389 64.600, 70.643 64.537, 71.002 64.420, 71.090 64.350, 71.387 63.664, 71.537 63.438, 71.598 63.166, 71.578 62.873, 71.465 62.451, 71.348 62.127, 71.322 61.934, 71.252 61.709, 71.369 61.223, 71.496 60.916, 71.412 60.539, 70.980 60.201, 70.625 59.760, 70.193 59.986, 69.898 60.295, 69.619 61.092, 69.521 61.438, 69.336 61.795, 69.225 61.957, 69.201 62.098, 69.264 62.781, 69.459 63.672, 69.430 63.789, 69.340 63.977, 69.342 63.984, 69.121 63.736, 68.955 63.445, 68.650 63.068, 68.512 62.389, 68.361 62.023, 67.873 61.588, 67.756 61.410, 67.615 60.998, 67.449 60.717, 67.311 60.361, 67.172 59.896, 67.234 59.859, 67.352 59.871, 67.463 59.928, 67.520 59.928, 67.684 59.281, 67.602 58.980, 67.395 58.820, 67.160 58.600, 67.115 58.344, 67.105 58.127, 67.156 58.063, 67.326 58.133, 67.461 58.186, 67.504 58.176, 67.045 57.656, 66.287 57.260, 65.785 56.645, 65.414 56.553, 65.066 56.146, 64.768 55.746, 64.943 55.572, 64.719 55.461, 64.520 55.396, 64.014 55.143, 63.707 54.844, 63.734 54.715, 63.807 54.602, 63.740 54.301, 63.643 54.102, 63.229 53.553, 62.938 52.848, 62.869 52.549, 62.713 52.252, 62.711 52.250, 62.564 51.969, 62.514 51.777, 62.424 51.551, 62.182 51.109, 61.986 50.861, 61.754 50.121, 61.715 49.914, 61.615 49.658, 61.467 49.561, 61.291 49.621, 61.037 49.623, 60.693 49.537, 60.701 49.461, 60.959 49.234, 61.387 48.818, 61.607 48.881, 61.723 48.939, 61.873 48.961, 61.852 48.814, 61.688 48.502, 61.486 48.113, 61.396 47.760, 61.410 47.641, 61.422 47.549, 61.674 47.445, 61.867 47.453, 62.465 47.725, 62.744 47.783, 63.004 47.705, 62.813 47.572, 62.689 47.463, 62.590 47.230, 62.559 47.068, 62.598 46.977, 62.545 46.842, 62.398 46.662, 62.254 46.564, 62.104 46.547, 61.982 46.438, 61.885 46.238, 61.656 46.105, 61.512 46.078, 61.508 45.461, 61.504 44.918, 61.500 44.377, 61.012 44.355, 60.570 44.336, 60.570 43.883, 60.570 43.035, 60.779 42.379, 60.992 41.744, 60.670 41.277, 60.324 40.777, 60.100 40.570, 59.838 39.945, 59.705 39.670, 59.590 39.564, 59.465 39.504, 59.004 39.527, 58.574 39.189, 58.072 38.793, 57.455 38.309, 56.914 37.992, 56.693 37.922, 56.174 37.896, 56.117 37.836, 56.082 37.662, 56.084 37.469, 56.254 37.176, 56.266 36.990, 55.912 36.367, 55.805 36.186, 55.502 36.113, 55.561 35.934, 55.561 35.813, 55.518 35.719, 55.449 35.674, 55.359 35.668, 55.121 35.742, 54.941 35.461, 54.379 34.656, 54.197 34.559, 54.164 34.504, 54.303 34.258, 54.533 33.893, 54.574 33.680, 54.529 33.445, 54.279 33.004, 54.340 32.816, 54.447 32.602, 54.455 32.439, 54.623 32.465, 54.840 32.467, 54.906 32.334, 54.902 31.871, 54.953 31.703, 55.635 30.920, 55.975 30.742, 56.232 30.580, 56.291 30.346, 56.238 30.223, 56.188 30.045, 56.172 29.918, 55.887 29.563, 55.787 29.385, 55.775 29.223, 55.844 28.934, 55.963 28.711, 56.365 28.578, 56.594 28.467, 56.623 28.365, 56.326 28.203, 55.693 28.152, 55.229 28.199, 55.080 28.148, 54.861 27.830, 54.627 27.662, 54.408 27.555, 54.195 27.574, 54.064 27.531, 54.035 27.395, 53.727 26.352, 53.631 26.209, 53.486 26.174, 53.365 26.168, 53.285 26.096, 53.199 25.951, 53.139 25.762, 53.133 25.514, 53.146 25.299, 53.104 25.160, 52.998 25.023, 52.848 24.926, 52.717 24.809, 52.484 23.885, 52.393 23.635, 52.393 23.609, 52.395 23.611, 52.398 23.563, 52.375 23.350, 52.482 23.164, 52.475 23.092, 52.254 22.857, 51.941 22.623, 51.857 22.582, 51.855 22.332, 51.865 22.143, 51.838 21.973, 51.777 21.873, 51.775 21.797, 51.900 21.613, 51.820 21.492, 51.361 21.193, 51.189 21.043, 50.871 21.014, 50.838 20.914, 50.889 20.705, 50.996 20.451, 51.170 20.201, 51.225 20.068, 51.291 19.844, 51.314 19.684, 51.508 19.459, 51.508 19.400, 51.453 19.318, 51.301 19.273, 51.143 19.256, 51.082 19.215, 51.063 19.094, 51.082 18.602, 51.031 18.305, 50.967 18.090, 51.008 17.605, 50.898 17.508, 50.725 17.252, 50.650 17.035, 50.691 16.955, 50.729 16.813, 50.752 16.627, 50.744 16.494, 50.586 16.365, 50.469 16.229, 50.453 16.078, 50.406 15.895, 50.340 15.748, 50.311 15.654, 50.367 15.598, 50.594 15.555, 50.920 15.586, 51.188 15.588, 51.338 15.492, 51.525 14.605, 51.695 14.371, 51.895 14.236, 52.281 14.553, 52.441 14.662, 52.537 14.664, 52.596 14.740, 53.051 15.484, 53.250 15.703, 53.367 15.891, 53.445 16.098, 53.586 16.236, 53.770 16.313, 53.992 16.514, 54.143 16.670, 54.396 16.992, 54.664 17.111, 55.637 17.346, 56.178 17.453, 56.119 17.295, 56.180 17.453, 56.336 17.484, 56.748 17.328, 57.234 17.350, 57.234 17.346, 57.412 17.354, 58.055 16.695, 58.248 16.477, 58.631 16.361, 58.846 16.100, 59.191 15.781, 59.611 15.480, 59.998 15.211, 60.295 15.049, 60.830 14.666, 61.166 14.533, 61.457 14.537, 61.893 14.986, 62.260 15.393, 62.373 15.570, 62.191 15.730, 61.852 15.885, 61.785 15.998, 61.764 16.143, 61.775 16.281, 61.822 16.395, 62.238 16.654, 62.285 16.799, 62.289 16.945, 62.242 17.035, 62.148 17.090, 61.859 17.162, 61.609 17.246, 61.523 17.330, 61.449 17.430, 61.461 17.539, 61.535 17.664, 62.045 18.004, 62.102 18.129, 62.203 18.297, 62.328 18.400, 62.539 18.428, 62.643 18.496, 63.135 19.123, 63.254 19.168, 63.828 19.029, 63.908 19.035, 63.859 17.676, 63.869 17.592, 64.070 17.150, 64.172 16.730, 64.316 16.531, 64.592 16.707, 64.582 16.908, 64.617 16.998, 64.742 16.904, 64.840 16.752, 65.033 15.984, 65.180 15.826, 65.297 15.752, 65.309 15.576, 65.197 15.203, 65.189 14.814, 65.443 13.975, 65.617 13.072, 65.824 12.682, 66.156 12.480, 66.502 12.338, 66.857 12.232, 67.486 12.207, 68.111 12.367, 67.945 11.883, 67.781 11.699, 67.598 11.541, 67.420 11.432, 67.059 11.275, 66.668 11.275, 66.455 11.250, 66.295 11.160, 65.840 10.764, 65.561 10.453, 64.914 9.617, 64.768 9.283, 64.680 8.906, 64.576 8.596, 64.420 8.324, 63.783 7.371, 63.336 6.783, 63.078 6.566, 62.926 6.809, 62.678 7.242, 62.568 7.473, 62.307 7.686, 61.869 7.910, 61.627 8.008, 61.367 8.473, 61.080 8.924, 60.883 8.975, 60.324 8.904, 60.123 8.863, 59.555 8.664, 59.396 8.543, 59.238 8.020, 59.063 7.793, 58.842 7.648, 58.691 7.525, 58.629 7.400, 58.469 7.217, 58.174 6.943, 57.959 6.684, 57.793 6.613, 57.586 6.705, 57.461 6.730, 57.406 6.686, 57.365 6.467, 57.063 6.391, 57.012 6.340, 56.609 6.131, 56.453 6.020, 56.307 6.012, 55.992 5.949, 55.729 5.848, 55.605 5.715, 55.426 5.566, 55.090 5.383, 54.844 5.207, 54.830 5.098, 54.982 4.633, 55.092 4.188, 55.029 4.100, 54.891 4.025, 54.631 3.957, 54.016 3.980, 53.635 3.529, 53.500 3.428, 53.252 3.355, 52.893 3.219, 52.688 3.117, 52.631 3.154, 52.408 3.648, 52.186 3.297, 52.053 3.201, 51.861 3.148, 51.664 3.148, 51.170 3.320, 50.805 3.510, 50.531 3.650, 50.258 3.730, 50.123 3.840, 49.756 3.820, 49.570 3.736, 49.510 3.648, 49.543 3.494, 49.670 3.322, 49.680 3.227, 49.635 3.154, 49.186 2.924, 49.004 2.783, 48.414 2.582, 47.688 2.230, 47.438 1.998, 47.414 1.840, 47.129 1.682, 46.766 1.539, 46.484 1.578, 46.221 1.596, 45.807 1.328, 45.416 1.314, 44.975 1.395, 44.877 1.426, 44.771 1.461, 43.453 1.350, 43.117 1.131, 42.830 0.910, 42.059 0.752, 41.662 0.584, 41.268 0.346, 40.838 0.139, 40.475 0.223, 39.979 0.104, 39.439 0.000"
let max = 0;
let min = 9999999;

a.split(", ").forEach((val) => {
  let splits = val.split(" ")
  splits = splits.map((percent) => percent.slice(0, -1))
  let int1 = parseFloat(splits[0])
  let int2 = parseFloat(splits[1])
  if (int1 > max) max = int1
  if (int1 < min) min = int1
  if (int2 > max) max = int2
  if (int2 < min) min = int2
})

console.log(max)
// max = 602.672

const b = a.split(", ").map((val) => {
  let splits = val.split(" ")
  splits = splits.map((percent) => percent.slice(0, -1))
  let int1 = parseFloat(splits[0])
  int1 = int1 / max
  let int2 = parseFloat(splits[1])
  int2 = int2 / max
  return "" + (int1 * 100).toFixed(3) + "% " + (int2 * 100).toFixed(3) + "%"
}).join(", ")

fs.writeFile("result.txt", b, err => {
  if (err) throw err;
  console.log('File successfully written to disk');
})

console.log(b)

let xmax = 0;
let xmin = 9999999;
let ymax = 0;
let ymin = 9999999;

a.split(", ").forEach((val) => {
  let splits = val.split(" ")
  splits = splits.map((percent) => percent.slice(0, 1))
  let intx = parseFloat(splits[0])
  let inty = parseFloat(splits[1])
  if (intx > xmax) xmax = intx
  if (intx < xmin) xmin = intx
  if (inty > ymax) ymax = inty
  if (inty < ymin) ymin = inty
})

const trueMax = xmax > ymax ? xmax : ymax

// // Should not normalize in both directions... should pick the highest
// const normalized = a.split(", ").map((val) => {
//   let splits = val.split(" ")
//   splits = splits.map((percent) => percent.slice(0, 1))
//   let int1 = parseFloat(splits[0])
//   int1 = parseFloat(((int1  xmin) / (trueMax  xmin)).toPrecision(4))
// let int2 = parseFloat(splits[1])
// int2 = parseFloat(((int2  ymin) / (trueMax  ymin)).toPrecision(4))
// return "" + int1 * 100 + "% " + int2 * 100 + "%"
// }).join(", ")

// console.log(normalized)

